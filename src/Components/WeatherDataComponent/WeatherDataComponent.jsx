import React, { useEffect } from 'react'
import fetchWeatherData from '../WeatherApiComponent/WeatherApi'
import { useState } from 'react'
import Search from '../SearchComponent/Search';
import Loader from '../LoaderComponent/Loader';
import WeatherDescrip from '../WeatherDescripComponent/WeatherDescrip';


const WeatherDataComponent = () => {
const [weather, setweather] = useState("")
const [city, setcity] = useState("")



const fetchData = async () => {
    try {
      const weatherData = await fetchWeatherData(city); // Call the fetchWeatherData function
      console.log(weatherData); // Log the weather data to the console

      console.log(JSON.stringify(weatherData))
      setweather(weatherData)
    setcity("")
            } 
            
      catch (error) {
        alert("Please enter the valid Place!");
    }
  };
  const handleInput = (e)=>{
    setcity(e.target.value);
}



  return (
    <>
{!weather &&(
<>
<div className='flex items-center justify-center flex-col h-screen bg-slate-900'>
<Search city={city} handleInput={handleInput} fetchData={fetchData} />
< Loader />
</div>
</>
)
}

{weather &&
(
<>
<div className='sm:h-screen bg-slate-800 flex flex-col items-center justify-center'>
<Search city={city} handleInput={handleInput} fetchData={fetchData} />
< WeatherDescrip weather={weather}/>
</div>
</>
)
}

    </>
  )
}

export default WeatherDataComponent