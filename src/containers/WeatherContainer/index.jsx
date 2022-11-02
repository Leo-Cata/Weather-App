import React, { useEffect, useState } from 'react';
import WeatherData from '../../components/WeatherData';

const WeatherContainer = () => {
  //url to fetch cause too long
  const fetchURL =
    'https://api.openweathermap.org/data/2.5/weather?q=puerto madryn&units=metric&lang=es&appid=4ca2b13ddf8ad5300e2001fb03446dae';

  //save weather data
  const [weatherData, setWeatherData] = useState({});

  //fetch data, save it to state. After 60 seconds refetch again
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const resp = await fetch(fetchURL);
        const data = await resp.json();
        setWeatherData(data);
        let date = new Date();
        console.log(date);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
    const interval = setInterval(() => {
      getWeatherData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  //then pass the data to the component if the there's an ID on weatherData
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      {weatherData.id && <WeatherData data={weatherData} />}
    </div>
  );
};

export default WeatherContainer;
