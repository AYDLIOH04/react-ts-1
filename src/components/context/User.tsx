import { useContext } from "react";
import { AuthUser, UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext)

  const handleLogin = () => {
    userContext.setUser({
      name: "Pavel",
      email: "pvl_brchv@inbox.ru",
    })
  }
  
  const handleLogout = () => {
    userContext.setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
}
 