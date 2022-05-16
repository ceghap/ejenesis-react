export const getPayloadFromToken = (
  token: string | ((newToken: string) => void) | null
) => {
  if (!token) return null;
  if (typeof token === "function") return null;
  if (token.length === 0) return null;

  const payload = token.split(".")[1];

  return JSON.parse(window.atob(payload));
};

export const getPayload = (
  token: string,
  type: string | undefined = undefined
) => {
  switch (type) {
    case "jwt":
      return getPayloadFromToken(token);
    default:
      return JSON.parse(token);
  }
};
