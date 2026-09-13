import { Outlet } from "react-router-dom"

function AuthPage() {
 
  return (
    <div> 
      <Outlet /> 
      {/* Login.jsx or Signup.jsx renders here */} 
    </div>

  )
}

export default AuthPage;
