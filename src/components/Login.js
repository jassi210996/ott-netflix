import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../shared/InputField";
import { signinUser, signupUser } from "../shared/firebase-api";
import { validateAuthForm } from "../utils/validate";
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { updateUser } from "../utils/userSlice";
import { USER_AVATAR_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, changeFormState] = useState(true);
  const [invalidData, setInvalidField] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleForm = () => {
    changeFormState(!isSignInForm);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formValidity = validateAuthForm(
      !isSignInForm ? "signup" : "signin",
      email.current.value,
      password.current.value,
      fullName?.current?.value
    );
    if (formValidity) {
      setInvalidField(formValidity);
      return;
    }
    handleAuth();
  };

  const handleAuth = () => {
    if (!isSignInForm) {
      signupUser(email.current.value, password.current.value)
        .then((userCredentials) => {
          setDisplayName(userCredentials.user);
        })
        .catch((error) => {
          handleAuthError(error);
        });
      return;
    }
    signinUser(email.current.value, password.current.value)
      .then((userCredentials) => {
        navigate("/browse");
      })
      .catch((error) => {
        handleAuthError(error);
      });
  };

  const setDisplayName = (user) => {
    updateProfile(user, {
      displayName: fullName.current.value,
      photoURL: USER_AVATAR_URL,
    })
      .then(() => {
        const { displayName, photoURL } = auth.currentUser;
        dispatch(updateUser({ displayName, photoURL }));
      })
      .catch((error) => {
        handleAuthError(error);
      });
  };

  const handleAuthError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setInvalidField({
      field: "email",
      msg: errorCode + "-" + errorMessage,
    });
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen w-screen bg-cover overflow-y-auto bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg')]">
        <form className="flex flex-col bg-black bg-opacity-75 p-8">
          <h3 className="text-white text-2xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          {!isSignInForm && (
            <InputField
              elRef={fullName}
              type="text"
              placeholder="Full Name"
              error={invalidData?.field === "fullName" && invalidData.msg}
            />
          )}
          <InputField
            elRef={email}
            type="text"
            placeholder="Email Address"
            error={invalidData?.field === "email" && invalidData.msg}
          />
          <InputField
            elRef={password}
            type="password"
            placeholder="Password"
            error={invalidData?.field === "password" && invalidData.msg}
          />
          <button
            type="submit"
            className="text-white bg-red-600 w-80 h-10 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 p-2 m-2"
            onClick={formSubmitHandler}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-sm m-2">Forgot your password?</p>
          <p className="text-gray-500 text-sm m-2">
            {isSignInForm ? "New to Netflix?" : "Already Registered"}{" "}
            <span
              className="font-bold text-white cursor-pointer"
              onClick={toggleForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
