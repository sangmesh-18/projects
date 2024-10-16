import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    //console.log("Backend URL:", backendUrl);   
    const [doctors, setDoctors] = useState([]);
    const [token,setToken]=useState(localStorage.getItem('token') ? localStorage.getItem('token') :false);
    const [userData,setUserData]=useState(false);



    const getAllDoctorsData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
            console.log(data);
            if (data.success) {
                setDoctors(data.doctors);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.log(err);
            if (err.response) {
                toast.error(err.response.data.message || "An error occurred");
            } else {
                toast.error(err.message);
            }
        }
    };
    
    useEffect(() => {
        getAllDoctorsData();  // Fetch the data when context is initialized
      }, []);
      
    const loadUserProfileData= async()=>{
        try{
            const {data} =await axios.get(`${backendUrl}/api/user/get-profile`,{headers:{token}})
            if(data.success){
                setUserData(data.userData);
            }
            else{
                toast.err(data.message)
            }
        }catch(err){
            console.log(err);
            toast.error(err.message);
        }
    }
    const value = {
        doctors,getAllDoctorsData,
        currencySymbol,
        token,setToken,
        backendUrl,
        setUserData,userData,loadUserProfileData

    };

    
     // Run only once on mount
     useEffect(()=>{
        if(token){
            loadUserProfileData();
        }else{
            setUserData(false);
        }
     },[token])

    

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
