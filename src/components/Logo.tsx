import { SiInstacart } from "react-icons/si";
import useRoute from "../hooks/useRoute";

export default function Logo() {
  const { navigateToHome } = useRoute();
  return (
    <div
      className="flex items-center px-2 py-3 gap-2 text-xl text-primary font-bold cursor-pointer"
      onClick={navigateToHome}
    >
      <SiInstacart />
      <p>Simple Shopping</p>
    </div>
  );
}
