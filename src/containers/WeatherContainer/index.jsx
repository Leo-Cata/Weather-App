import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import WeatherData from '../../components/WeatherData';

const WeatherContainer = () => {
  //set state to get the item from local storage with key 'storageLocation'
  const [location, setLocation] = useState(
    localStorage.getItem('storageLocation'),
  );

  //handler to set the location as the value of text from the input
  const handleLocationSearch = () => {
    setLocation(textRef.current.value);
  };

  const textRef = useRef(null);
  //url to fetch cause too long
  const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es&appid=4ca2b13ddf8ad5300e2001fb03446dae`;

  //save weather data
  const [weatherData, setWeatherData] = useState({});

  //fetch data, save it to state. After 60 seconds refetch again
  useEffect(() => {
    //fetch data and save it to state

    const getWeatherData = async () => {
      try {
        //fetch location, if its not found show error and clean the local storage
        const resp = await fetch(fetchURL);
        const data = await resp.json();
        console.log('location', location);
        //if not 404 and location is not null(stringedfied cause sometimes return null as string)
        if (data.cod === '404' && String(location) !== 'null') {
          console.log('here');
          alert(data.message);
        } else {
          setWeatherData(data);
          localStorage.setItem('storageLocation', location);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
    //when location changes, save location in local storage
  }, [fetchURL, location]);

  //then pass the data to the component if the there's an ID on weatherData | if there isnt a location, show input and button to look for
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='bg-black h-[99%] w-[99%] rounded-2xl text-center'>
        {weatherData.id ? (
          <WeatherData data={weatherData} />
        ) : (
          <>
            <input
              type='text'
              className='bg-white rounded flex mt-6 mx-auto'
              placeholder='Ciudad'
              ref={textRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLocationSearch();
                }
              }}
            />
            <button onClick={handleLocationSearch} className='text-white'>
              Buscar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherContainer;
