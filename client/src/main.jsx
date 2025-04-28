import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Layout from "./Layout/Layout.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <LandingPage/>,
      },
    ]
  },
]);

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>
);
