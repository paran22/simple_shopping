import useRoute from "../hooks/useRoute";
import NavBarItem from "./NavBarItem";
import useGoogleAuth from "../hooks/useGoogleAuth";
import useAuthState from "../hooks/useAuthState";

export default function NavBar() {
  const { navigateToCart, navigateToLogin } = useRoute();
  const { isLogin, isLoading } = useAuthState();
  const { signOutWithGoogle } = useGoogleAuth();
  console.log(isLoading);
  return (
    <>
      {isLoading || (
        <div className="flex">
          <NavBarItem name="장바구니" onClick={navigateToCart} />
          {isLogin ? (
            <NavBarItem name="로그아웃" onClick={signOutWithGoogle} />
          ) : (
            <NavBarItem name="로그인" onClick={navigateToLogin} />
          )}
        </div>
      )}
    </>
  );
}
