import { Outlet } from "react-router";
import Navbar from "../components/navbar";

const AuthLayout = ({ children }: any) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
