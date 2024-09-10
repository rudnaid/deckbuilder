import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">App</Link>
    </div>
  );
}
