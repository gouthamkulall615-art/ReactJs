#  React JS Learning Journey

A personal learning repository for mastering React JS from scratch.

---

##  Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above)
- npm (comes with Node.js)

### Create a New React Project with Vite
```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

### Install Tailwind CSS
```bash
npm install -D @tailwindcss/vite
```

---

##  Topics Covered

### 1. React Overview
- [ ] What is React and why use it?
- [ ] How React works under the hood
- [ ] Real DOM vs Virtual DOM

### 2. JavaScript Essentials for React
- [ ] Import & Export (named vs default)
- [ ] ES6+ syntax used in React

### 3. Setting Up React with Vite
- [ ] Creating a project with Vite
- [ ] Project folder structure
- [ ] Running the dev server

### 4. Components
- [ ] What are components?
- [ ] Functional components
- [ ] Importing and exporting components
- [ ] Component composition

### 5. Props
- [ ] Passing props to components
- [ ] Destructuring props
- [ ] Children as props
- [ ] Mini Projects using Props

### 6. Styling in React
- [ ] Styling with CSS
- [ ] Intro to Tailwind CSS
- [ ] UI Design Project

### 7. Functions & Events
- [ ] Working with functions in React
- [ ] Handling events (onClick, onChange, etc.)

### 8. Hooks
- [ ] Introduction to Hooks
- [ ] `useState` — managing state
- [ ] `useEffect` — side effects & lifecycle
- [ ] Advanced State Management

### 9. Forms & Data Binding
- [ ] Form Handling in React
- [ ] Two-Way Data Binding
- [ ] Controlled components

### 10. Projects
- [ ] Mini Projects using Props
- [ ] UI Design Project
- [ ] Notes App Project
- [ ] Gallery Project

### 11. LocalStorage
- [ ] Saving data to LocalStorage
- [ ] Reading and syncing state with LocalStorage

### 12. API Calls in React
- [ ] Fetching data with `fetch`
- [ ] `useEffect` with API calls
- [ ] Loading & error states

### 13. React Router DOM
- [ ] React Router Basics
- [ ] `<BrowserRouter>`, `<Routes>`, `<Route>`
- [ ] Navigation with `<Link>`
- [ ] Advanced Routing & dynamic routes

### 14. Context API
- [ ] Introduction to Context API
- [ ] Creating and providing context
- [ ] Context API in Action
- [ ] When to use Context vs Props

### 15. Bonus Concepts
- [ ] Miscellaneous advanced React patterns

---

##  Project Structure

```
src/
├── components/        # Reusable components
│   ├── section1/
│   │   └── section1.jsx
│   └── ...
├── pages/             # Page-level components
├── hooks/             # Custom hooks
├── assets/            # Images, fonts, etc.
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles (Tailwind)
```

---

##  Key Concepts Quick Reference

| Concept | Description |
|--------|-------------|
| JSX | HTML-like syntax inside JavaScript |
| Component | Reusable piece of UI |
| Props | Data passed from parent to child |
| State | Data that changes over time |
| Hook | Special functions for state/effects |
| Virtual DOM | React's efficient rendering system |

---

##  Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Common Errors & Fixes

| Error | Fix |
|-------|-----|
| Component not rendering | Make sure to use `<Component />` not `<component />` |
| Tailwind styles not applying | Check `@import "tailwindcss"` is in `index.css` |
| `npm install` dependency conflict | Downgrade conflicting package versions in `package.json` |
| `rd /s /q` not working in PowerShell | Use `Remove-Item -Recurse -Force node_modules` |

---

##  Resources

- [React Official Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Router Docs](https://reactrouter.com/)

---

##  Author

**Goutham M**  
Learning React JS — Sigma Web Dev Course
