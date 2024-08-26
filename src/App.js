import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreviousProjects from "./PreviousProjects";
import Error from "./features/ui/Error";
import AppLayout from "./features/ui/AppLayout";
import Collections from "./features/Collections/Collections";
import Product from "./features/ProductDetails/Product";

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
        path: "/collections",
        element: <Collections />,
        errorElement: <Error />,
      },
      {
        path: "/previousProjects",
        element: <PreviousProjects />,
        errorElement: <Error />,
      },
      {
        path: "/product",
        element: <Product />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="container mx-auto px-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
