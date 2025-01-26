import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export type ProtectedAdminRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedAdminRoute({
  outlet,
}: ProtectedAdminRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const token = Cookies.get("access_token");
    console.log("token: ", token);
    setIsAuthenticated(!!token); // Set true if token exists, otherwise false
  }, []);

  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
  }, [isAuthenticated]);

  if (isAuthenticated === null) return <div>Loading...</div>; // Show loading state while checking authentication

  return isAuthenticated ? outlet : <Navigate to="/auth" />;
}
