import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Secure from "./components/Secure";
import Home from "./components/Home";
import ProtectedAdminRoute from "./routes/protected";
import { AuthActionTypes } from "./store/auth/action.types";
import { Provider } from "react-redux";
import store from "./store/root/root.store";

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

export type ActionMethod<T extends string = string, P = undefined> = {
  type: T;
  payload?: P;
};

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
