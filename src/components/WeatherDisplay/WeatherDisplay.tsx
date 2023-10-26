import './WeatherDisplayStyles.css'
import { WeatherData } from '../Weather/Weather'
import { useState } from 'react'

const METRIC = 0
const IMPERIAL = 1

/*
  
  This component renders the weather data

*/

export default function WeatherDisplay({ weatherData, goBack }: { weatherData: WeatherData, goBack: () => void }) {
  const [units, setUnits] = useState<0 | 1>(METRIC);

  // Destructuring for better readability
  const { temp_c, temp_f, feelslike_c, feelslike_f, humidity, vis_km, vis_miles } = weatherData.current;

  // Prepare the current weather data base on the selected units
  const currentData = {
    temp: `${units === METRIC ? `${temp_c}°C` : `${temp_f}°F`}`,
    feelslike: `${units === METRIC ? `${feelslike_c}°C` : `${feelslike_f}°F`}`,
    humidity: `${humidity}%`,
    vis: `${units === METRIC ? `${vis_km}km` : `${vis_miles}mi`}`,
  };

  // Toggle between metric and imperial units
  const toggleUnits = () => setUnits((prevUnits) => (prevUnits === METRIC ? IMPERIAL : METRIC));

  return (
    <div className="weather-display">
      <div className="weather-header">
        <button aria-label='back' className='back-button' onClick={goBack}>
          <img src='/back.svg' className='back-img'/>
        </button>
        <div className="weather-location">
          <h1>{weatherData.location.country}</h1>
          <h2>{weatherData.location.name}</h2>
        </div>
      </div>
      <div>
        <p>{currentData.temp} feels like {currentData.feelslike}</p>
        <p>{currentData.humidity} humidity</p>
        <p>{currentData.vis} visibility</p>
      </div>
      <button onClick={toggleUnits}>Toggle units</button>
    </div>
  );
}