
# Art Gallery Dashboard

A React-based art gallery dashboard application built with TypeScript, PrimeReact, and Bun. This application displays art data in a paginated, selectable data table.

## Features

- 📊 Interactive data table with art information
- ✅ Multi-select functionality for artworks
- 📄 Custom pagination component
- 🎨 PrimeReact UI components
- ⚡ Built with Bun for fast performance
- 🔷 TypeScript for type safety

## Tech Stack

- **Runtime:** Bun
- **Framework:** React 18
- **Language:** TypeScript
- **UI Library:** PrimeReact
- **Build Tool:** Vite (or your build tool)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Bun](https://bun.sh/) (latest version)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
bun install
```

## Running the Application

### Development Mode

Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173` (or your configured port).

### Production Build

Build the application for production:
```bash
bun run build
```

Preview the production build:
```bash
bun run preview
```

## Project Structure

```
.
├── src/
│   ├── components/
│   │   └── Pagination.tsx      # Custom pagination component
│   ├── api/
│   │   └── artApi.ts           # API calls for art data
│   ├── App.tsx                 # Main application component
│   └── main.tsx                # Application entry point
├── package.json
├── tsconfig.json
└── README.md
```

## Components

### App.tsx
Main dashboard component that displays the art data table with pagination and selection features.

### Pagination.tsx
Custom pagination component built on top of PrimeReact's Paginator with a simplified API.

**Props:**
- `totalRecords` (number): Total number of records
- `page` (number): Current page (0-based index)
- `rows` (number): Number of rows per page
- `onChange` (function): Callback function when page changes

## API

The application fetches art data from the `fetchArtData()` function in `api/artApi.ts`.

## Data Model

```typescript
type ArtData = {
    id: number;
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: string;
    date_end: string;
}
```

## Usage

### Viewing Art Data
- The table displays 12 artworks per page by default
- Use pagination controls at the bottom to navigate between pages
- Change rows per page using the dropdown (5, 10, or 20 items)

### Selecting Artworks
- Click the checkbox in the "Select" column to select individual artworks
- Click the header checkbox to select all artworks on the current page
- Selected artworks are stored in component state

## Customization

### Changing Rows Per Page Options
Edit the `rowsPerPageOptions` in `Pagination.tsx`:
```typescript
rowsPerPageOptions={[5, 10, 20, 50]}
```

### Changing Default Rows Per Page
Update the initial state in `App.tsx`:
```typescript
const [rowsPerPage, setRowsPerPage] = useState(20); // Change from 12 to 20
```

## Dependencies

Key dependencies include:
- `react`: ^18.x
- `react-dom`: ^18.x
- `primereact`: ^10.x
- `primeicons`: ^7.x
- `typescript`: ^5.x

## Scripts

- `bun run dev` - Start development server/clinent 
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run linter (if configured)

## Troubleshooting

### TypeScript Errors
If you encounter TypeScript errors, ensure all types are properly imported:
```typescript


## Acknowledgments

- [PrimeReact](https://primereact.org/) for the UI components
- [Bun](https://bun.sh/) for the fast JavaScript runtime

```
