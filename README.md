# AyuIndex - Ayurveda Drug Database

AyuIndex is a comprehensive Ayurveda drug database web application built with React, TypeScript, Vite, and Tailwind CSS. It provides a modern interface for searching, filtering, and exploring Ayurvedic single herbs and classical formulations with detailed information for each entry.

## 🚀 Features

- **Comprehensive Database**: Includes classical formulations from Samhitas, Bhaishajya Ratnavali, and proprietary products
- **Advanced Search**: Full-text search across herbs and formulations
- **Smart Filtering**: Filter by formulation type, clinical system, and classical references
- **Dashboard Statistics**: Real-time counts and analytics
- **CRUD Operations**: Add, edit, and delete herbs and formulations
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Type Safety**: Full TypeScript support for better development experience

### Sample Classical Formulations
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

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **JSON Server** for REST API
- **JSON Database** for data persistence
- **Custom API Service Layer** for data management

## 📁 Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── AddForm.tsx    # Add new formulations
│   │   ├── EditForm.tsx   # Edit existing formulations
│   │   ├── FilterPanel.tsx # Search and filter controls
│   │   ├── FormulationsList.tsx # Main formulations list
│   │   ├── HerbsList.tsx  # Herbs management
│   │   ├── Stats.tsx      # Dashboard statistics
│   │   └── ...
│   ├── services/          # API service layer
│   │   └── api.ts         # API client and endpoints
│   ├── data/              # Data structure definitions
│   │   ├── categories/    # Clinical systems categorization
│   │   ├── formulations/  # Formulation type definitions
│   │   └── utils/         # Data validation utilities
│   ├── hooks/             # Custom React hooks
│   │   └── useSearch.ts   # Search functionality
│   ├── types/             # TypeScript type definitions
│   │   └── ayurveda.ts    # Core Ayurveda types
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles (Tailwind)
├── scripts/               # Database population scripts
│   ├── populate-db.mjs    # Main database population
│   ├── populate-all-formulations.cjs # Formulations data
│   └── add-missing-formulations.cjs # Data updates
├── data/                  # Database files
│   ├── db.json            # Main database
│   └── herbs_dataset.json # Herbs dataset
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig*.json         # TypeScript configuration
```

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## ⚡ Quick Start

### 1. Clone and Install
```powershell
git clone <repository-url>
cd ayuindex
npm install
```

### 2. Populate Database
```powershell
npm run db:populate
```

### 3. Start Development Servers
```powershell
# Terminal 1 - Start JSON Server (Database)
npm run db:server

# Terminal 2 - Start Development Server
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **API Server**: http://localhost:3001

## 📋 Available Scripts

### Development
```powershell
npm run dev              # Start development server
npm run db:server        # Start JSON Server (database)
npm run db:populate      # Populate database with data
```

### Building
```powershell
npm run build            # Build for production
npm run preview          # Preview production build
```

### Database Management
```powershell
npm run db:server        # Start database server
npm run db:populate      # Populate database
npm run db:reset         # Reset and repopulate database
```

### Code Quality
```powershell
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript compiler check
```

## 🔧 API Endpoints

The JSON Server provides the following REST API endpoints:

- `GET /herbs` - Get all herbs
- `GET /herbs/:id` - Get specific herb
- `POST /herbs` - Create new herb
- `PUT /herbs/:id` - Update herb
- `DELETE /herbs/:id` - Delete herb

- `GET /formulations` - Get all formulations
- `GET /formulations/:id` - Get specific formulation
- `POST /formulations` - Create new formulation
- `PUT /formulations/:id` - Update formulation
- `DELETE /formulations/:id` - Delete formulation

## 🎯 Key Components

### Dashboard (`Stats.tsx`)
- Real-time statistics display
- Counts for herbs, formulations, indications, references
- Interactive navigation to different sections

### Search & Filter (`FilterPanel.tsx`)
- Full-text search across all data
- Filter by formulation type and clinical system
- Real-time search results

### Formulations Management
- Browse by type (Churna, Arishta, Vati, etc.)
- Detailed formulation information
- Add/edit/delete functionality

### Herbs Management
- Comprehensive herb database
- Detailed Ayurvedic properties
- CRUD operations

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure JSON Server is running: `npm run db:server`
   - Check if port 3001 is available

2. **Build Errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Run TypeScript check: `npm run type-check`

3. **Missing Data**
   - Repopulate database: `npm run db:populate`
   - Check database file: `data/db.json`

### Windows Users
- Use PowerShell for all commands
- Ensure Node.js v18+ is installed
- Run commands as Administrator if needed

## 📚 Data Sources

Formulations are sourced from authentic Ayurvedic texts:
- Charaka Samhita
- Sushruta Samhita
- Ashtanga Hridaya
- Bhaishajya Ratnavali
- Ayurvedic Formulary of India
- Ayush Pharmacopoeia of India

## 🛡️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: JSON Server, REST API
- **Icons**: Lucide React
- **Build Tools**: Vite, ESLint, PostCSS
- **Development**: Hot Module Replacement, TypeScript

## 📄 License

This project is for educational and informational purposes related to Ayurvedic medicine.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Note**: This application is designed for educational purposes and should not replace professional medical advice. Always consult qualified Ayurvedic practitioners for medical treatment.
