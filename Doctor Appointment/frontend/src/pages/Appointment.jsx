import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/App'
import { assets } from '../assets/assets'
import RelatedDoc from '../components/RelatedDoc'

const Appointment = () => {

  const {docId}=useParams();
  const {doctors,currencySymbol} =useContext(AppContext);
  const daysOfweek=['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const [docInfo,setDocInfo]=useState(null)
  const [docSlots,setDocSlots]=useState([]);
  const [slotIndex,setSlotIndex]=useState(0);
  const [slotTime,setSlotTime]=useState('');

  const fetchDocInfo = async ()=>{
    const docInfo=doctors.find(doc=>doc._id===docId)
    setDocInfo(docInfo);
   
  }

  const getAvailableSlots =async ()=>{
    setDocSlots([]);
    //getting current date
    let today=new Date();
    for(let i=0;i<7;i++){
      let currentDate=new Date(today);
      currentDate.setDate(today.getDate()+i);

      let endTime=new Date();
      endTime.setDate(today.getDate()+i);
      endTime.setHours(21,0,0,0);

      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() +1:10);
        currentDate.setMinutes(currentDate.getMinutes()>30 ?30:0);
      }
      else{
        currentDate.setHours(10);
        currentDate.setMinutes(0);

      }
      let timeSlots=[];
      while(currentDate < endTime){
        let formttedtime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

        timeSlots.push({
          dateTime:new Date(currentDate),
          time:formttedtime
        })

        currentDate.setMinutes(currentDate.getMinutes()+30)

      }
      setDocSlots(prev =>([...prev,timeSlots]))
    }



  }
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()

  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 mt-5'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg ' src={docInfo.image} alt="" />

        </div>
        <div className='flex-1 border border-gray-400 p-8 rounded-lg py-7 bg-white sm:mx-0 '>
          <p className='flex items-center gap-3 text-2xl font-medium text-gray-900 '>{docInfo.name}
            <img className='w-5' src={assets.verified_icon}/>
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-1 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>

          <div>
            <p className='flex flex-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>

        </div>
        
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white ':'border border-gray-200'} `} key={index}>
                <p>{item[0] && daysOfweek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate() }</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
        {docSlots.length && docSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-300'} `} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}

      </div>
      <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>

      </div>
      {
        <RelatedDoc docId={docId} speciality={docInfo.speciality}></RelatedDoc>
      }
     
      
 
    </div>
  
  )
}

export default Appointment