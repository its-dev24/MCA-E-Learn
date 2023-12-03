import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove from local storage
    localStorage.removeItem("user");
    //dispatch
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
