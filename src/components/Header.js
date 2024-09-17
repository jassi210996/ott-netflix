import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const signoutClickHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <header className="absolute flex w-full p-4 px-8 bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-28"
      />
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
