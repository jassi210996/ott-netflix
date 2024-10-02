import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(setUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(setUser(null));
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signoutClickHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <header className="z-10 absolute flex w-full p-4 px-8 bg-gradient-to-b from-black top-0">
      <img src={LOGO_URL} alt="logo" className="w-28" />
      {user && (
        <div className="flex ml-auto w-32 items-center">
          <img className="mr-2" src={user?.photoURL} alt="user" />
          <span
            className="text-white font-semibold cursor-pointer"
            onClick={signoutClickHandler}
          >
            (Sign Out)
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
