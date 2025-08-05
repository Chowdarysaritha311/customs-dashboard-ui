# Customs Filing Portal - Login & Dashboard UI

This project implements a responsive customer login and dashboard interface for a customs filing portal, designed specifically for customs brokers and logistics professionals.

## Features

- **Responsive Login Page**:
  - Clean, professional design
  - Basic form validation
  - Mobile-friendly layout

- **Dashboard**:
  - Sidebar navigation with collapsible behavior
  - Summary cards for quick overview of filings
  - Recent filings table with status indicators
  - Modal for creating new filings
  - Responsive design that works on all device sizes

## Technical Details

- Built with pure HTML, CSS, and JavaScript (no frameworks)
- Mobile-first responsive design
- Semantic HTML structure
- CSS variables for consistent theming
- Accessible UI components
- No external dependencies except Font Awesome for icons

## Responsive Behavior

The interface adapts to different screen sizes:

- **Desktop (1024px+)**:
  - Full sidebar with text labels
  - 4-column summary cards layout
  - Standard table view

- **Tablet (768px-1023px)**:
  - Collapsed sidebar with icons only
  - 2-column summary cards
  - Horizontal scrolling for tables

- **Mobile (<768px)**:
  - Bottom navigation bar
  - Single column layout
  - Stacked elements for better readability

## How to Use

1. Open `index.html` in a browser to see the login page
2. Enter any email and password to "login" (validation is client-side only)
3. You'll be redirected to the dashboard (`dashboard.html`)
4. Explore the dashboard features:
   - Click "New Filing" to open the creation modal
   - The sidebar is fully responsive
   - All interactive elements have hover/focus states

## Future Improvements

- Connect to a real backend API
- Add more detailed filing views
- Implement user authentication
- Add more advanced filtering/sorting to the filings table
- Implement dark mode
