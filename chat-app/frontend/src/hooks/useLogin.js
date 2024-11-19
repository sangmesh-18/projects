import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
  
	const login = async (username, password) => {
	  const success = handleInputErrors(username, password);
	  if (!success) return;
	  setLoading(true);
	  try {
		const res = await fetch("/api/auth/login", {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ username, password }),
		});
  
		const data = await res.json();
  
		// Check for error status and show the error message from the backend
		if (!res.ok) { // if the response is not OK (status code outside 200-299 range)
		  throw new Error(data.error || "Invalid password or username");
		}
  
		// Successful login, set user and navigate
		localStorage.setItem("chat-user", JSON.stringify(data));
		setAuthUser(data);
		  // Redirect to dashboard or a desired page
	  } catch (error) {
		console.log(error.message); // Log error for debugging
		toast.error(error.message); // Show the actual error from the backend
		navigate("/login"); // Navigate to signup or login page if credentials are invalid
	  } finally {
		setLoading(false);
	  }
	};
  
	return { loading, login };
  };
  
  export default useLogin;
  
  function handleInputErrors(username, password) {
	if (!username || !password) {
	  toast.error("Please fill in all fields");
	  return false;
	}
	return true;
  }
  