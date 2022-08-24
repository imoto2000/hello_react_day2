import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const { authUser, loading, _signOut } = useAuth();
  const router = useRouter();

  const count = useSelector((state) => {
    return state.counter.count;
  });

  console.log(">>>>>>>>>>>>>> authUser", authUser);

  const logOut = () => {
    _signOut();
  };

  const logIn = () => {
    router.push("/accounts/login");
  };

  const signUp = () => {
    router.push("/accounts/signup");
  };

  return (
    <header>
      <Link href="/">
        <h2>Hello React ${count}</h2>
      </Link>
      <h6>
        {authUser ? (
          <div>
            {authUser?.email}! You are logged in.
            <button onClick={logOut}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={logIn}>Login</button>
            <button onClick={signUp}>signUp</button>
          </div>
        )}
      </h6>
    </header>
  );
};

export default Header;
