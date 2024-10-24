import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Team from "./Team.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { Provider } from 'react-redux'
import Store from "./Store/store.jsx"
import { useSelector, useDispatch } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/team/2024" replace />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/team/:year",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/team/:year/:name",
    element: <Team/>,
    errorElement: <ErrorPage/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </Provider>
  </StrictMode>
);
