export function getToken() {
  try {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    return {
      token,
      refreshToken,
    };
  } catch {
    throw new Error("error message");
  }
}
