import { Navigate, Outlet } from "react-router";
import { ACCESS_TOKEN, ROUTES } from "../constants";
import AuthLayout from "../layouts/auth-layout";

const AuthRoute = () => {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    );
  }
  return <Navigate to={ROUTES.HOME} replace />;
};

export default AuthRoute;
