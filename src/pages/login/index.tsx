import { FormLogin } from "../../components/FormLogin";
import { Container } from "./style";

export function Login() {
  return (
    <Container>
      <img
        src="/images/backgroundLogin.svg"
        alt="backgroundLogin"
        className="imageBackground"
      />
      <FormLogin />
    </Container>
  );
}
