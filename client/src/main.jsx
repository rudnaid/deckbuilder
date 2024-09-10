import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import DeckBuilder from "./components/DeckBuilder.jsx";
import CardDisplay from "./components/CardDisplay.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
