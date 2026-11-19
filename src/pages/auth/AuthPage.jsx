import { Outlet } from "react-router-dom";
import Signup from "./Signup";

function AuthPage() {
  return (
    <div>
      <Outlet />
      <Signup />
    </div>
  );
}

export default AuthPage;
