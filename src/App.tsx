import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
