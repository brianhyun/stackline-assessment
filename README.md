# Stackline Assessment Project

This project is a product dashboard built using Next.js with the App Router. It displays product information, a table of sales data, and an interactive chart that aggregates sales data by month. The link to the project is [here](https://stackline-assessment-bay.vercel.app/).

## Features

- **React** for building the user interface
- **Redux Toolkit** for state management
- **Recharts** for interactive data visualization
- **TailwindCSS** for modern and responsive styling
- **Next.js App Router** for routing and API integration

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd stackline-assessment
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Scripts

- **`npm run dev`**: Runs the development server.
- **`npm run build`**: Builds the project for production.
- **`npm start`**: Starts the production server.

## Features Breakdown

### Product Information

The product details are displayed prominently, including:

- Title
- Subtitle
- Tags

### Monthly Sales Chart

- Aggregates weekly sales data by month.
- Displays retail and wholesale sales trends.

### Table of Sales Data

- Displays weekly sales data.
- Columns: Retail Sales, Wholesale Sales, Units Sold, Retailer Margin.

### API Integration

- A mock API (`/api/sales`) serves sales data.

## Technologies Used

- **Next.js**: Framework for building server-rendered React applications.
- **Redux Toolkit**: State management with slices for products and sales data.
- **Recharts**: Interactive and responsive charts.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **TypeScript**: Type safety for JavaScript.
