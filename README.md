# AyuIndex

AyuIndex is a comprehensive Ayurveda drug database web application built with React, TypeScript, Vite, and Tailwind CSS. It allows users to search, filter, and explore Ayurvedic single herbs and classical formulations, providing detailed information for each entry.

## Features
 - Includes classical formulations from Samhitas, Bhaishajya Ratnavali, and proprietary products from various companies
 - Sample classical formulations from authentic texts include:
    - Chyawanprash (Charaka Samhita)
    - Triphala Churna (Charaka Samhita)
    - Dashamoola Kwatha (Sushruta Samhita)
    - Hingvashtaka Churna (Bhaishajya Ratnavali)
    - Punarnavadi Mandura (Bhaishajya Ratnavali)
    - Brahmi Ghrita (Ashtanga Hridaya)
    - Ashwagandhadi Churna (Charaka Samhita)
    - Shatavari Kalpa (Company Formulation)
    - Liv 52 (Proprietary, Himalaya)
    - Kumaryasava (Bhaishajya Ratnavali)
 - Formulations are sourced from Charaka Samhita, Ayurvedic Formulary of India, Ayush Pharmacopoeia of India, and Bhaishajya Ratnavali for authenticity and completeness.

## Project Structure
```
├── src/
│   ├── components/        # Reusable UI components
│   ├── data/              # Herbs and formulations data
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles (Tailwind)
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig*.json         # TypeScript configuration
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. **Clone the repository**
   ```powershell
   git clone <repository-url>
   cd ayuindex
   ```
2. **Install dependencies**
   ```powershell
   npm install
   ```

## s
1. **Start the development server**
   ```powershell
   npm run dev
   ```
   This will launch the app at `http://localhost:5173` (default Vite port). Open this URL in your browser.

2. **Build for production**
   ```powershell
   npm run build
   ```
   The production-ready files will be generated in the `dist` folder.

3. **Preview the production build**
   ```powershell
   npm run preview
   ```
   This will serve the production build locally.

## Linting
To check code quality and formatting:
```powershell
npm run lint
```

## Technologies Used
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## License
This project is for educational and informational purposes.
// ...existing code...
export const formulations = [
  {
    id: 'chyawanprash',
    name: 'Chyawanprash',
    reference: 'Charaka Samhita',
    categories: ['Anti-inflammatory', 'Immune booster', 'Nervous System'],
    // ...other fields...
  },
  {
    id: 'triphala_churna',
    name: 'Triphala Churna',
    reference: 'Charaka Samhita',
    categories: ['Gastro Intestinal Tract', 'Anti-microbial', 'Anti-inflammatory'],
    // ...other fields...
  },
  {
    id: 'dashamoola_kwatha',
    name: 'Dashamoola Kwatha',
    reference: 'Sushruta Samhita',
    categories: ['Respiratory System', 'Anti-inflammatory', 'Anti-rheumatic'],
    // ...other fields...
  },
  {