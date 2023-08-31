import { atom } from "recoil";
import { AuthUser } from "../hooks/useAuthState";

export const userState = atom<AuthUser>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});
