# React Template Project

This is a modern React template project built with Vite, React Router, and a well-organized folder structure. It provides a solid foundation for building scalable React applications.

## Project Structure

```
IP-REACT-TEMPLATE/
├── node_modules/
├── public/
│   └── ip.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   └── Button.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── ErrorPage.jsx
│   │   │   └── Home.jsx
│   │   └── App.jsx
│   ├── config/
│   │   └── router.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   ├── services/
│   │   └── api.jsx
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── utils/
│   │   └── main.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Features

- React 18+ with Vite for fast development and building
- React Router 6+ for client-side routing
- Organized component structure (common, layout, pages)
- Basic styling with CSS (easily extendable)
- ESLint configuration for code quality
- Error boundary and 404 page handling

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/dreazz97/ip-react-template.git
   cd ip-react-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port Vite assigns).

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint to check for code quality issues
- `npm run preview`: Preview the production build locally

## Compiling and Building

This project uses Vite for building and compiling. Here's how to compile your project for production:

1. Run the build command:
   ```
   npm run build
   ```
   This will create a `dist` folder with your compiled and optimized production-ready assets.

2. To preview the production build locally, run:
   ```
   npm run preview
   ```
   This will serve your production build locally, allowing you to check it before deployment.

3. For deployment, upload the contents of the `dist` folder to your web server or hosting platform.

Note: Vite automatically handles code splitting, asset optimization, and creates a highly optimized build for production.

## Folder Structure Explanation

- `components/`: React components, organized by type (common, layout, pages)
- `config/`: Configuration files, including the router setup
- `context/`: React Context files for state management
- `hooks/`: Custom React hooks
- `services/`: API and other service-related files
- `styles/`: CSS files for styling
- `utils/`: Utility functions and helpers

## Routing

This template uses React Router 6+. The main router configuration is in `src/config/router.jsx`. To add new routes, update this file and create corresponding components in the `src/components/pages/` directory.

## Styling

The project uses plain CSS for styling. The main stylesheet is `src/styles/App.css`. You can easily extend this to use CSS modules, Sass, or other styling solutions by modifying the Vite configuration.

## State Management

For small to medium-sized applications, you can use the built-in `AppContext.jsx` for state management. For larger applications, consider integrating a state management library like Redux or MobX.

## API Integration

The `src/services/api.jsx` file is prepared for your API integration. Implement your API calls here and import them into your components as needed.

## Customization

Feel free to modify the template to fit your specific needs. You can add or remove components, change the styling, or integrate additional libraries as your project requires.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Created by @iuripeniche