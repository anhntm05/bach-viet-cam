import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/shared/context/AuthContext";
import { type Role } from "@/shared/constants/roles";

interface ProtectedRouteProps {
  allowedRoles?: Role[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, isLoading, hasAnyRole } = useAuth();

  // In development, bypass auth so all routes are accessible for UI review
  if (import.meta.env.DEV) {
    return <Outlet />;
  }

  if (isLoading) {
    return <div className="p-10 text-center text-on-surface-variant">Đang tải...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !hasAnyRole(allowedRoles)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}
