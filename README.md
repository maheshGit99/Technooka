# Admission Analytics Dashboard

A modern, responsive web application for visualizing and analyzing college/university admission data. Built with React and Vite, this dashboard provides real-time insights into admission trends, application statistics, and program-specific metrics.

## Project Description

The Admission Analytics Dashboard is a comprehensive data visualization platform designed for admission offices and institutional administrators. It fetches live admission data from a backend API and presents it through an intuitive, interactive interface with charts, status cards, and filtering capabilities. The application is optimized for both desktop and mobile viewing with Material-UI components ensuring a professional appearance.

## Features

- **Dashboard Overview**: Display of total applicants, verified applicants, and rejected applicants with dynamic status cards
- **Application Bar Chart**: Visualize application distribution across different programs
- **Application Trend Chart**: Track admission trends over time with date range filtering capabilities
- **Date Range Filtering**: Filter application trends using a date picker interface
- **Real-Time Data Fetching**: Pull live admission analytics data from a REST API
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Data Refresh**: Manual refresh button to update dashboard data on demand
- **Color-Coded Status Cards**: Visual indicators for application volume (green for low, yellow for medium, red for high)
- **Professional UI**: Material-Design components for consistent, polished user experience

## Tech Stack

### Frontend
- **React**: 19.1.0 - UI library for building interactive components
- **Vite**: 6.3.5 - Fast build tool and dev server
- **React Router DOM**: 7.6.1 - Client-side routing and navigation
- **Material-UI (MUI)**: 7.1.0 - Component library for professional UI
- **MUI X Date Pickers**: 8.4.0 - Date selection components
- **Chart.js**: 4.4.9 - Charting library for data visualization
- **React ChartJS 2**: 5.3.0 - React wrapper for Chart.js
- **Axios**: 1.9.0 - HTTP client for API requests
- **DayJS**: 1.11.13 - Date manipulation and parsing library
- **Emotion**: 11.14.0 - CSS-in-JS library for styling

### Development Tools
- **ESLint**: 9.25.0 - Code quality and linting
- **@vitejs/plugin-react**: 4.4.1 - React Fast Refresh support in Vite

## Folder Structure

```
Technooka/
├── src/
│   ├── app-routes/
│   │   └── AppRoutes.jsx           # Route configuration and navigation
│   ├── pages/
│   │   └── AdmissionDashboard.jsx  # Main dashboard page with data fetching
│   ├── components/
│   │   ├── ApplicationBarChart.jsx # Bar chart component for applications per program
│   │   ├── ApplicationTrendChart.jsx # Line chart component with date filtering
│   │   └── StatusCard.jsx          # Status cards for key metrics
│   ├── assets/                     # Static assets (images, icons)
│   ├── App.jsx                     # Root app component
│   ├── App.css                     # App styling
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Public static files
├── index.html                      # HTML template
├── package.json                    # Project dependencies and scripts
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

## Installation Steps

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/maheshGit99/Technooka.git
   cd Technooka
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/` (or another available port)

## Environment Variables

**Needs Manual Update**: No environment variables are currently configured in the application. The API endpoint is hardcoded in the `AdmissionDashboard.jsx` component. For production use, consider adding environment variables for API configuration:

```
VITE_API_BASE_URL=https://your-api-endpoint.com
VITE_API_ENDPOINT=/api/v1/analytics/admissions
```

To implement this, update the axios call in `src/pages/AdmissionDashboard.jsx` to use these environment variables.

## Available Scripts / Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot module replacement (HMR) |
| `npm run build` | Builds the application for production to the `dist` folder |
| `npm run lint` | Runs ESLint to check code quality and style |
| `npm run preview` | Serves the production build locally for preview |

### Running Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Check code quality
npm run lint

# Preview production build
npm run preview
```

## Usage Instructions

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173/`

3. The dashboard will automatically load admission data from the API
