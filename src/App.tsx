import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { CategoriesPage } from './components/categories_page';
import { HomePage } from './components/home_page';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/categories",
      element: <CategoriesPage/>
    },
    {
      path: "/categories/newCategories",
      element: <CategoriesPage/>
    },
    {
      path: "/categories/newCategories/theMostNewCategories",
      element: <CategoriesPage/>
    },
    {
      path: "/categories/oldCategories",
      element: <CategoriesPage/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;