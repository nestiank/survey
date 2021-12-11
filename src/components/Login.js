import { useLocation } from "react-router";

function Login({ login }) {
  login(useLocation());
}

export default Login;
