import NotFoundPage from "../../pages/NotFoundPage";
import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../../pages/ProductsPage";
import CartPage from "../../pages/CartPage";
import ProductDetailPage from "../../pages/ProductDetailPage";
import LoginPage from "../../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);
