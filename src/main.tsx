import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/app.sass'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./routes/Home";
import Post from "./routes/Post";
import Review from "./routes/Review";
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/noticia",
        element: <Post />,
      },
      {
        path: "/review",
        element: <Review />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
