import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'

const useGetConversation = () => {
    const [loading,setLoading] = useState(false);
    const [conversations,setConversation] =useState([])

    useEffect(()=>{
        const getConverSation = async()=>{
            setLoading(true)
            try{
                const res = await fetch("api/user/");
                const data = await res.json();

                if(data.error){
                    throw new Error(data.error)
                }
                setConversation(data);

            }catch(e){
                toast.error(e.message)
            }finally{
                setLoading(false)
            }

        }
        getConverSation();
    },[])
  
  return {loading,conversations}
}

export default useGetConversation
