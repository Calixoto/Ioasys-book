import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../context/auth";
import { Books } from "../pages/books";
import { Login } from "../pages/login";
import { PrivateRoute } from "./private";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
}
