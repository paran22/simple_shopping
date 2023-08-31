import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../state/userState";
import { User } from "firebase/auth";

export type AuthUser = User | null;

export default function useAuthState() {
  const [user, setUser] = useRecoilState(userState);
  const setAuthUser = (user: AuthUser) => setUser(user);
  const isLogin = user !== null;
  return { setAuthUser, isLogin, user };
}
