import { Navigate, Outlet } from "react-router";
import { ACCESS_TOKEN, ROUTES } from "../constants";
import ContentLayout from "../layouts/content-layout";

const ContentRoute = () => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    return (
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    );
  }
  return <Navigate to={ROUTES.LOGIN} replace />;
};

export default ContentRoute;
