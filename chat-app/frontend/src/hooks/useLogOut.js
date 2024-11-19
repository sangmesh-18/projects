import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
    const { setAuthUser } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    try {
        const res= await fetch('/api/auth/logout',{
            method:"POST",
            headers:{'content-type': 'application/json'}
        })
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null);

    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  return { logOut, loading };
};

export default useLogOut;
