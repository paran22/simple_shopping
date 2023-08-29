import { useNavigate } from "react-router-dom";

export default function useRoute() {
  const navigator = useNavigate();
  const navigateToCart = () => navigator("/cart");
  const navigateToHome = () => navigator("/");
  return { navigateToCart, navigateToHome };
}
