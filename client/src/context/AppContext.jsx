import {createContext, useEffect, useState} from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


export const AppContext=createContext();
export const AppContextProvider=(props)=>{
  const currency=import.meta.env.VITE_CURRENCY;
  const[allcourses,setallcourses]=useState([]);

   const navigate=useNavigate();
  //fetch all courses
  const fetchAllcourses=async()=>{
    setallcourses(dummyCourses);
  }
  useEffect(()=>{
    fetchAllcourses()
  },[]);

    const value={
        currency,allcourses,navigate
    }
    return(
        <AppContext.Provider value={value}>
          {props.children}
        </AppContext.Provider>
    )
}