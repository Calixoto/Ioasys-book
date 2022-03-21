import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { Container, Error } from "./style";

export function FormLogin() {
  const { handleLogin, authenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setLoginError(false);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSignIn(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.preventDefault();
    try {
      await handleLogin(email, password);
    } catch {
      setLoginError(true);
    }
  }

  if (authenticated && location.pathname === "/") {
    navigate("/books");
  }

  return (
    <Container>
      <div className="logoContainer">
        <img src="/images/logo-white.svg" alt="logout" />
        <h1>Books</h1>
      </div>

      <form>
        <label htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            type="text"
            onChange={(e) => handleEmailChange(e)}
          />
        </label>
        <label htmlFor="password">
          <span>Senha</span>
          <input
            id="password"
            type="password"
            onChange={(e) => handlePasswordChange(e)}
          />
          <button type="submit" onClick={(e) => handleSignIn(e)}>
            Entrar
          </button>
        </label>
      </form>
      {loginError && <Error>Email e/ou senha incorretos.</Error>}
    </Container>
  );
}
