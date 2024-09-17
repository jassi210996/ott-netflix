import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const signupUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
