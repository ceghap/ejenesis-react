import { useState } from "react";

export const useToken = (): (
  | string
  | ((newToken: string) => void)
  | null
)[] => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
