import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Secure from "./components/Secure";
import Home from "./components/Home";
import ProtectedAdminRoute from "./routes/protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedAdminRoute outlet={<Home />} />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/secure",
    element: <Secure />,
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
