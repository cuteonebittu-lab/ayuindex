const API_BASE_URL = 'http://localhost:3001';

export interface ApiResponse<T> {
  data: T;
}

// Generic API functions
async function apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
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
    body: JSON.stringify(herb),
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
    body: JSON.stringify(formulation),
  }),
  delete: (id: string) => apiCall<void>(`/formulations/${id}`, {
    method: 'DELETE',
  }),
};

// Import types from ayurveda
import { Herb, Formulation } from '../types/ayurveda';
