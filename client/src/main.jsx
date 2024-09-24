import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import DeckBuilder from "./components/DeckBuilder/DeckBuilder.jsx";
import CardDisplay from "./components/CardDisplay/CardDisplay.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Login } from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/deckbuilder",
    element: <DeckBuilder />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carddisplay",
    element: <CardDisplay />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
