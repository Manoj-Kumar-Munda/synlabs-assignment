import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";
import AddUser from "./pages/AddUser";
import Updateuser from "./pages/Updateuser";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/update-user/:id",
        element: <Updateuser />,
      },
    ],
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
