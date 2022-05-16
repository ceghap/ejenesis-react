import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
export const signUp = async (email: string, password: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!user) return null;

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
