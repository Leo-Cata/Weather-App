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
  useEffect(() => {
    //fetch data and save it to state
    if (location) {
      const getWeatherData = async () => {
        try {
          const resp = await fetch(fetchURL);
          const data = await resp.json();
          //if there is .name in data fetched, set the data, else set location back to null and alert user
          if (data.name) {
            setWeatherData(data);
          } else {
            setLocation(null);
            alert('Location Not Found, Please Try Again');
          }
        } catch (error) {
          console.log(error);
        }
      };

      getWeatherData();
    }

    //when location changes, save location in local storage
    localStorage.setItem('storageLocation', location);
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
            <button onClick={handleLocationSearch}>Buscar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherContainer;
