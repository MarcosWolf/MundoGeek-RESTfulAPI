import ReactDOM from 'react-dom/client'
import './sass/app.sass'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import HomeRoute from "./routes/HomeRoute";
import PostRoute from "./routes/PostRoute";
import CategoryRoute from './routes/CategoryRoute';
import ErrorPageRoute from './routes/ErrorPageRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/post/:id",
        element: <PostRoute />,
      },
      {
        path: "/category/:id",
        element: <CategoryRoute />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
  
)
