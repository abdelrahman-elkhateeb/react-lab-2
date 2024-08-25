import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreviousProjects from "./PreviousProjects";
import Error from "./features/ui/Error";
import AppLayout from "./features/ui/AppLayout";
import HomePage from "./features/Home/HomePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "*",
        element: <Error message="Page not found" />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: "/previousProjects",
        element: <PreviousProjects />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
