import {createContext, useEffect, useState} from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


export const AppContext=createContext();
export const AppContextProvider=(props)=>{
  const currency=import.meta.env.VITE_CURRENCY;
  const[allcourses,setallcourses]=useState([]);
  const[isEducator,setisEducator]=useState(true);

   const navigate=useNavigate();
  //fetch all courses
  const fetchAllcourses=async()=>{
    setallcourses(dummyCourses);
  }
  useEffect(()=>{
    fetchAllcourses()
  },[]);
  //function to calculate avg rating for courses
  const calculateRating=(course)=>{
      if(course.courseRatings.length===0)return 0;
      let totalRating=0;
      course.courseRatings.forEach((rating)=>{
           totalRating+=rating.rating;
      })
      return (totalRating/course.courseRatings.length).toFixed(1);
  }

    const value={
        currency,allcourses,navigate,calculateRating,isEducator,setisEducator
    }
    return(
        <AppContext.Provider value={value}>
          {props.children}
        </AppContext.Provider>
    )
}