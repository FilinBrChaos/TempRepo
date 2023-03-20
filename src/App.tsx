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
      element: <CategoriesPage></CategoriesPage>
    },
    {
      path: "/badPath",
      element: <CategoriesPage></CategoriesPage>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;