# React Query Todo App

This is a simple React Todo App built using the [React Query](https://react-query.tanstack.com/) library for state management.

## Features

- **Todo List:** View a list of todos with their titles and completion status.
- **Add Todo:** Add new todos to the list.
- **Loading and Error Handling:** Gracefully handle loading states and errors during data fetching.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **React Query:** A powerful library for managing, caching, and syncing state across your application.
- **TypeScript:** Adds static typing to JavaScript, enhancing developer productivity and code quality.
- **Vite:** A fast, opinionated frontend build tool that serves your code via native ES modules.

## Project Structure

- **`src/components`:** Contains React components for the UI.
- **`src/hooks`:** Custom hooks, including the `useQuery` and `useMutation` hooks.
- **`src/services`:** Services layer responsible for handling data fetching and mutations.
- **`src/custom-types`:** TypeScript type declarations for custom data types.
- **`src/enums`:** Enumerations for better code readability.
- **`src/styles`:** SCSS styles for styling the application.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EminFurkan/react-query-todo.git
   ```
2. **Install dependencies:**

    ```bash
      cd react-query-todo
      npm install
     ```
3. **Run the app:**

    ```bash
      npm run dev
     ```
4. **Run the mock server:**
  
    ```bash
      npm run serve-json
     ```
