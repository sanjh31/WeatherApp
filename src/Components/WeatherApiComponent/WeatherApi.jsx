import React from 'react';
import axios from 'axios';


const fetchWeatherData = async (city) => {
const api_key = "029dfafb393150bfc44a7e9e49abff68";
try{
    const url =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`) ;
    const response = url.data ;
    return response;
} catch(error){
    console.log("Here is the error:", error);
}
 
}

fetchWeatherData();


export default fetchWeatherData;