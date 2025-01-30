import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../store/auth/selector";

export type ProtectedAdminRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedAdminRoute({
  outlet,
}: ProtectedAdminRouteProps) {
  const authToken = useSelector(getAuthSelector);

  if (authToken === undefined) return <div>Loading...</div>; // Show loading state while checking authentication

  return authToken ? outlet : <Navigate to="/auth" />;
}
