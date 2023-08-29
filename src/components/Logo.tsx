import { SiInstacart } from "react-icons/si";
import useRoute from "../hooks/useRoute";

export default function Logo() {
  const { navigateToHome } = useRoute();
  return (
    <button
      className="flex items-center px-2 gap-2 text-xl text-primary font-bold"
      onClick={navigateToHome}
    >
      <SiInstacart />
      <p>Simple Shopping</p>
    </button>
  );
}
