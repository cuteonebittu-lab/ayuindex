const API_BASE_URL = 'http://localhost:3002';

export interface ApiResponse<T> {
  data: T;
}

// Generic API functions
async function apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  console.log(`API Call: ${options.method || 'GET'} ${API_BASE_URL}${endpoint}`);
  console.log('Request Options:', options);

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const responseText = await response.text(); // Read response as text first
  console.log(`Response Status for ${endpoint}: ${response.status}`);
  console.log(`Response Body for ${endpoint}:`, responseText);

  if (!response.ok) {
    let errorMessage = `API call failed: ${response.statusText}`;
    try {
      const errorJson = JSON.parse(responseText);
      errorMessage += ` - ${errorJson.message || responseText}`;
    } catch (e) {
      errorMessage += ` - ${responseText}`;
    }
    throw new Error(errorMessage);
  }

  // Only parse as JSON if there's content and it's valid JSON
  if (responseText) {
    try {
      return JSON.parse(responseText);
    } catch (e) {
      console.warn(`Could not parse response as JSON for ${endpoint}:`, responseText);
      return responseText as unknown as T; // Return raw text if not JSON, or handle as appropriate
    }
  }
  return {} as T; // Return empty object for no content (e.g., DELETE)
}

// Herb API functions
export const herbApi = {
  getAll: () => apiCall<Herb[]>('/herbs'),
  getById: (id: string) => apiCall<Herb>(`/herbs/${id}`),
  create: (herb: Omit<Herb, 'id'>) => apiCall<Herb>('/herbs', {
    method: 'POST',
    body: JSON.stringify(herb),
  }),
  update: (id: string, herb: Partial<Herb>) => apiCall<Herb>(`/herbs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ ...herb, id: undefined }), // Explicitly remove 'id' from body for PUT
  }),
  delete: (id: string) => apiCall<void>(`/herbs/${id}`, {
    method: 'DELETE',
  }),
};

// Formulation API functions
export const formulationApi = {
  getAll: () => apiCall<Formulation[]>('/formulations'),
  getById: (id: string) => apiCall<Formulation>(`/formulations/${id}`),
  create: (formulation: Omit<Formulation, 'id'>) => apiCall<Formulation>('/formulations', {
    method: 'POST',
    body: JSON.stringify(formulation),
  }),
  update: (id: string, formulation: Partial<Formulation>) => apiCall<Formulation>(`/formulations/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ ...formulation, id: undefined }), // Explicitly remove 'id' from body for PUT
  }),
  delete: (id: string) => apiCall<void>(`/formulations/${id}`, {
    method: 'DELETE',
  }),
};

// Import types from ayurveda
import { Herb, Formulation } from '@/types/ayurveda';
