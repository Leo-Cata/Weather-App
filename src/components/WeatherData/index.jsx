import React from 'react';

const WeatherData = ({ data }) => {
  //get icon, place name, temp and weather description
  const icon = data.weather[0].icon;
  const placeName = data.name;
  const temp = Math.round(data.main.temp) + '°';
  const weatherDescription = data.weather[0].description;

  //saves it cause idk how to put it straight to src
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className='bg-black h-[99%] w-[99%] rounded-2xl text-center'>
      <div className='text-white text-4xl m-2'>{placeName}</div>
      <div className='flex justify-center flex-col flex-wrap '>
        <img src={weatherIcon} alt='' className='text-white w-full h-auto' />
        <div className='text-white text-3xl mb-8 absolute top-2/4 right-[29%]'>
          {weatherDescription}
        </div>
      </div>
      <div className='text-white text-7xl'>{temp}</div>
    </div>
  );
};

export default WeatherData;
