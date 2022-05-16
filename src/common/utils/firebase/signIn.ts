import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export const signIn = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (!user) return null;

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
