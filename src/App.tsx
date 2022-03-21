import { AuthContextProvider } from "./context/auth";
import { AppRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <AuthContextProvider>
      <AppRoutes />
      <GlobalStyle />
    </AuthContextProvider>
  );
}
