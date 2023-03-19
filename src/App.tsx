import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { CategoriesPage } from './components/categories_page';
import { HomePage } from './components/home_page';
import { Navbar } from './components/navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>
    },
    {
      path: "/categories",
      element: <CategoriesPage></CategoriesPage>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;