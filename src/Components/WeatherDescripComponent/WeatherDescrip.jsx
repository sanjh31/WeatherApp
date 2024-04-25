import React from 'react'

import { FaLocationDot } from "react-icons/fa6";


const WeatherDescrip = ({ weather }) => {

  return (
<div className="content-weather  flex  items-start flex-col justify-between xl:w-2/4 w-11/12 lg:w-3/4  bg-teal-700 p-4 rounded-md" >

<div className='flex justify-between items-start w-full   '>
<div className="flex flex-col"> 
<div className='flex items-center justify-center'>
<FaLocationDot className='text-slate-200 text-2xl'/>
<h3 className="text-xl sm:text-2xl  font-medium  text-white font-sans px-2 ">{weather.name} , {weather.sys.country}</h3>
 </div>
    
<div >
<h1 className="md:text-6xl sm:text-4xl text-2xl text-white font-medium flex justify-start items-start md:mt-16 mt-8">{Math.round(weather.main.temp)}<span className="font-poppins">°C</span></h1>
<h1 className="weather-description text-lg font-medium  text-white font-poppins">{weather.weather[0].description}</h1>
</div>
</div>


   <div className=" flex items-end justify-center flex-col ">
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
    <h1 className="weather-description hidden sm:flex text-lg text-white font-medium mt-1">{weather.weather[0].description}</h1>
    </div>
</div>

    <div className="flex justify-between items-center mt-10 w-full flex-col sm:flex-row">
   <div className="temperature-part flex w-full m-1 flex-col justify-between items-center my-3 text-lg text-white bg-teal-800 shadow-xl p-2 rounded-md">
    <h3 className="font-sans text-lg">Temperature  </h3>
    <h3 className="md:text-2xl xl:text-3xl text-xl font-base font-medium mt-4 ">{Math.round(weather.main.temp)}<span className="text-2xl  font-base">°C</span></h3>
    </div>
          
    <div className="temperature-part flex w-full m-1 flex-col justify-between items-center my-3 text-lg text-white  bg-teal-800 shadow-xl p-2 rounded-md">
    <h3 className="font-sans text-lg">Humidity  </h3>
    <h3 className="md:text-2xl xl:text-3xl text-xl font-base font-medium mt-4 ">{weather.main.humidity}<span className="text-2xl  font-base">%</span></h3>
    </div>

    <div className="temperature-part flex w-full m-1 flex-col justify-between items-center my-3 text-lg text-white  bg-teal-800 shadow-xl p-2 rounded-md">
    <h3 className="font-sans text-lg">WindSpeed  </h3>
    <h3 className="md:text-2xl xl:text-3xl text-xl font-base font-medium mt-4 ">{`${weather.wind.speed}`}<span className="text-2xl  font-base">km </span></h3>
    </div>

    <div className="temperature-part flex w-full m-1 flex-col justify-between items-center my-3 text-lg text-white  bg-teal-800 shadow-xl p-2 rounded-md">
    <h3 className="font-sans text-lg">Visibility  </h3>
    <h3 className="md:text-2xl xl:text-3xl text-xl font-base font-medium mt-4 ">{`${weather.visibility}`} <span className="text-2xl  font-base">mi</span></h3>
    </div>
    </div>
    </div>

  )
}

export default WeatherDescrip