import { signOut as fbSignOut } from "firebase/auth";
import { auth } from "./config";
import { useNavigate } from "react-router-dom";

export const signOut = async () => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    await fbSignOut(auth);
    navigate("/login");
  } catch (error) {
    console.log(error);
    return false;
  }
};
