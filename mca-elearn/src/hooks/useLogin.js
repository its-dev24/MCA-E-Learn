import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setisLoading(true);
    setError(null);
    const data = {
      username,
      password,
    };

    const response = await axios.post("http://localhost:5000/Login", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
    const json = response.data;
    console.log(json);
    if (response.status !== 200) {
      setisLoading(false);
      setError("Error");
    }
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });
      setisLoading(false);
    }
  };
  return { login, isLoading, error };
};
