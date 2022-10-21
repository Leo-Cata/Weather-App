import React, { useEffect, useState } from 'react';
import WeatherData from '../../components/WeatherData';

const WeatherContainer = () => {
  //url to fetch cause too long
  const fetchURL =
    'https://api.openweathermap.org/data/2.5/weather?q=puerto madryn&units=metric&lang=es&appid=4ca2b13ddf8ad5300e2001fb03446dae';

  //save weather data
  const [weatherData, setWeatherData] = useState({});

  //fetch data and save it to state
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const resp = await fetch(fetchURL);
        const data = await resp.json();

        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  }, []);

  //then pass the data to the component
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <WeatherData data={weatherData} />
    </div>
  );
};

export default WeatherContainer;
