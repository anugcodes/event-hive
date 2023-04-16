import { Navigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
export function Private({ children }) {
  let { currentUser } = UserAuth();
  let location = useLocation();
  return currentUser ? (
    children
  ) : (
    <Navigate to={'/'} state={{from: location}} />
  );
}