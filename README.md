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

### Using the Dashboard

- **View Status Cards**: At the top, three status cards display:
  - Total number of applicants
  - Number of verified applicants
  - Number of rejected applicants
  - Cards are color-coded: green (normal), yellow (500-1000 applications), red (1000+)

- **View Application Distribution**: The bar chart shows how applications are distributed across different programs

- **Filter Trends by Date**: 
  - Click on the "From" date picker to select a start date
  - Click on the "To" date picker to select an end date
  - The line chart will automatically update to show only data within the selected range

- **Refresh Data**: Click the "Refresh Data" button to fetch the latest admission analytics from the server

## API Integration Details

### Current API Endpoint
The application integrates with a MockAPI endpoint for demonstration purposes:
```
GET https://6836e069664e72d28e428083.mockapi.io/api/v1/analytics/admissions
```

### Expected Response Format
The API should return an array with at least one object containing the following structure:

```json
{
  "id": "1",
  "totalApplicants": 1500,
  "verifiedApplicants": 1200,
  "rejectedApplicants": 300,
  "applicationsPerProgram": [
    {
      "program": "Computer Science",
      "count": 450
    },
    {
      "program": "Engineering",
      "count": 380
    }
  ],
  "applicationTrends": [
    {
      "date": "2025-01-01",
      "applications": 50
    },
    {
      "date": "2025-01-02",
      "applications": 75
    }
  ]
}
```

### API Integration Points
- **AdmissionDashboard.jsx**: Handles API calls using Axios in the `fetchData()` function
- **Error Handling**: Basic error logging is implemented (Note: There's a typo on line 28 using `ConstantSourceNode` instead of `console`)

## Screenshots Section

**Note**: Screenshots are not available in the current repository. To add them:

1. Create a `/screenshots` directory in the root of the project
2. Add the following images:
   - `dashboard-overview.png` - Full dashboard view
   - `bar-chart.png` - Applications per program chart
   - `trend-chart.png` - Application trends with date filters
   - `mobile-view.png` - Mobile responsive view
   - `status-cards.png` - Status cards section

3. Update this section with:
   ```markdown
   ![Dashboard Overview](/screenshots/dashboard-overview.png)
   ![Bar Chart](/screenshots/bar-chart.png)
   ![Trend Chart](/screenshots/trend-chart.png)
   ```

## Deployment Instructions

### Build for Production

1. **Create a production build**
   ```bash
   npm run build
   ```
   This generates optimized files in the `dist` folder.

2. **Verify the build**
   ```bash
   npm run preview
   ```
   This serves the production build locally at `http://localhost:4173/`

### Deploy Options

#### Option 1: Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Option 2: Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Option 3: Manual Deployment
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

### Environment Configuration for Production
- Update the API endpoint in `src/pages/AdmissionDashboard.jsx` to point to your production API
- Consider implementing environment variables as mentioned in the "Environment Variables" section

## Future Enhancements

- **User Authentication**: Add login and role-based access control for different admission office staff
- **Export Functionality**: Enable exporting dashboard data to CSV and PDF formats
- **Advanced Filtering**: Add filters by program, date range, application status, and more
- **Real-Time Updates**: Implement WebSocket integration for live data updates
- **Custom Reports**: Allow users to generate custom reports based on selected metrics
- **Data Analytics**: Add predictive analytics and trend forecasting
- **Multi-Language Support**: Implement internationalization (i18n) for global accessibility
- **Dark Mode**: Add theme switching between light and dark modes
- **Notification System**: Alert administrators to significant changes or milestones
- **Database Integration**: Replace MockAPI with a real backend database
- **Performance Optimization**: Implement data pagination and virtualization for large datasets
- **Unit & Integration Tests**: Add comprehensive test coverage using Jest and React Testing Library
- **API Documentation**: Generate Swagger/OpenAPI documentation for the backend API

## Known Issues

- **Line 28 in AdmissionDashboard.jsx**: Contains a typo using `ConstantSourceNode.log()` instead of `console.log()`
- **Hardcoded API Endpoint**: API URL is hardcoded; should be moved to environment variables
- **Limited Error Handling**: Error messages are not displayed to users; consider adding user-facing error notifications

## Author Information

**Project Owner**: [maheshGit99](https://github.com/maheshGit99)

**Repository**: [Technooka](https://github.com/maheshGit99/Technooka)

**License**: [Needs Manual Update] - No license specified. Consider adding an appropriate open-source license (MIT, Apache 2.0, GPL, etc.)

---

## Quick Start Summary

```bash
# Clone and setup
git clone https://github.com/maheshGit99/Technooka.git
cd Technooka
npm install

# Development
npm run dev

# Production build
npm run build

# Linting
npm run lint
```

## Support & Contribution

For issues, suggestions, or contributions, please visit the [GitHub Repository](https://github.com/maheshGit99/Technooka).

---

**Last Updated**: June 2026  
**Documentation Version**: 1.0
