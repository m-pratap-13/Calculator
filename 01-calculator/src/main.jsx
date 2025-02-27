import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./Componenets/Calculator.jsx";
import About from "./Componenets/About.jsx";
import Contact from "./Componenets/Contact.jsx";
import LoginForm from "./Componenets/LoginForm.jsx";
import SignUpForm from "./Componenets/SignUpForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Calculator />,
      },
      {
        path: "/home",
        element: <Calculator />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/log-in",
        element: <LoginForm/>,
      },
      {
        path: "/sign-up",
        element: <SignUpForm/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
