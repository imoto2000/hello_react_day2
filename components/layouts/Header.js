import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "@/store/account";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.count;
  });

  const currentUser = useSelector((state) => {
    return state.account;
  });

  console.log(">>>>>>>>>>>>>> currentUser", currentUser);

  const _logOut = () => {
    // _signOut();
    console.log(">>>>> called logout");
    dispatch(logout());
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
      <p>currentUser: {currentUser ? currentUser.id : "Not Login"}</p>
      <h6>
        {currentUser?.id ? (
          <div>
            {currentUser?.email}! You are logged in.
            <button onClick={_logOut}>Logout</button>
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
