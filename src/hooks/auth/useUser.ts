import { useEffect, useState } from "react";

import { getPayload } from "../../common/utils/helper";
import { useToken } from "./useToken";

export function useUser() {
  const [token] = useToken();

  const [user, setUser] = useState(() => {
    if (!token) return null;

    if (token) {
      if (!token.length) return null;
      if (typeof token === "function") return null;
      if (typeof token === "string" && token.length === 0) return null;

      return getPayload(token);
    }
  });

  useEffect(() => {
    if (!token) {
      setUser(undefined);
    } else {
      if (typeof token === "string" && token.length !== 0) {
        setUser(getPayload(token));
      }
    }
  }, [token]);

  return user;
}
