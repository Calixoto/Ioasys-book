import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { Container } from "./style";

export function Header() {
  const { handleLogout, authenticated, userInfo } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (!authenticated && location.pathname === "/books") {
    navigate("/");
  }

  return (
    <Container>
      <div className="logoContainer">
        <a href="/">
          <img src="/images/logo.svg" alt="logout" width={104} height={36} />
        </a>

        <h1>Books</h1>
      </div>
      <div className="userContainer">
        <span>
          Bem vindo, <strong>{userInfo}</strong>
        </span>
        <button onClick={() => handleLogout()}>
          <img src="/images/logout.svg" alt="logout" width={16} height={16} />
        </button>
      </div>
    </Container>
  );
}
