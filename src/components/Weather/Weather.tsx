import { useState } from 'react'
import './WeatherStyles.css'
import Input from '../Input/Input'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'

export interface WeatherData {
  current: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    vis_km: number;
    vis_miles: number;
  };
  location: {
    country: string;
    name: string;
  };
}

/*

This component handles state and renders components

*/

export default function Weather() {
  const [isActive, setActive] = useState(false) // Show/hide the weather display
  const [weatherData, setWeatherData] = useState<WeatherData>() // store data

  // Function which fetches weather data for the respective location
  const getWeather = async (location: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WEATHER_API_URL}&q=${location}` // fetch weather api
      );
      const data = await response.json();

      // if the response returns an error we throw it so it can be handled
      if (data?.error) {throw new Error(data.error)}
      
      setActive(true);
      setWeatherData(data);
    }catch(err) {
      console.error(err);
      alert('Error fetching weather data, are you sure you entered a valid location?');
    }
  };

  return(
    <div data-open={isActive ? true : null} className='weather-wrapper'>
      {
        isActive && weatherData ?
        <WeatherDisplay weatherData={weatherData} goBack={() => setActive(false)}/> :
        <Input onSubmit={getWeather} />
      }
    </div>
  )
}