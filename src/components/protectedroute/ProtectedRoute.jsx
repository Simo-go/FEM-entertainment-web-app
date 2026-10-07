import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import NoAuthPage from "../../pages/noauthpage/NoAuthPage";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(function () {
    if (!isAuthenticated) navigate("/no-access");
  });

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
