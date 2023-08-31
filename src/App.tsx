import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useGoogleAuth from "./hooks/useGoogleAuth";
import useAuthState from "./hooks/useAuthState";

function App() {
  const { setAuthUser } = useAuthState();
  const { onUserStateChange } = useGoogleAuth();
  useEffect(
    () =>
      onUserStateChange((user) => {
        setAuthUser(user);
      }),
    [onUserStateChange, setAuthUser]
  );
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
