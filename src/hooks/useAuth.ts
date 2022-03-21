import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.put.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function handleLogin(email: string, password: string) {
    const res = await api.post("auth/sign-in", {
      email,
      password,
    });
    const name = res.data.name;
    const token = res.headers.authorization;
    const refreshToken = res.headers["refresh-token"];

    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));

    api.defaults.headers.put.Authorization = `Bearer ${token}`;

    setUserInfo(name);

    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    api.defaults.headers.delete.Authorization;
  }

  return { authenticated, handleLogin, handleLogout, userInfo };
}
