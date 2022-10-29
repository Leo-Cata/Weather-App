import React from 'react';

import {
  BsFillCloudFill,
  BsFillCloudFogFill,
  BsFillCloudLightningRainFill,
  BsFillCloudMoonFill,
  BsFillCloudsFill,
  BsFillCloudSnowFill,
  BsFillCloudSunFill,
  BsFillMoonFill,
  BsFillSunFill,
} from 'react-icons/bs';
import { FaCloudMoonRain, FaCloudSunRain } from 'react-icons/fa';

const WeatherData = ({ data }) => {
  //get icon, place name, temp and weather description
  let icon;
  const placeName = data.name;
  const temp = Math.round(data.main.temp) + '°';
  const weatherDescription = data.weather[0].description.toUpperCase();
  console.log(data);

  //switch case, depending on the weather icon from api, set a custom, better looking svg icon, for day and night respectively when necessary
  switch (data.weather[0].icon) {
    case '01d':
      icon = <BsFillSunFill className='text-white text-[250px] mt-8 mb-4' />;
      break;

    case '01n':
      icon = <BsFillMoonFill className='text-white text-[250px] mt-8 mb-4' />;
      break;

    case '02d':
      icon = (
        <BsFillCloudSunFill className='text-white text-[250px] mt-8 mb-4' />
      );
      break;

    case '02n':
      icon = (
        <BsFillCloudMoonFill className='text-white text-[250px] mt-8 mb-4' />
      );
      break;

    case '03d':
    case '03n':
      icon = <BsFillCloudFill className='text-white text-[250px] mt-8 mb-4' />;
      break;

    case '04d':
    case '04n':
      icon = (
        <BsFillCloudsFill className='text-white text-[250px] mt-8  mb-4' />
      );
      break;

    case '09d':
    case '09n':
      icon = (
        <BsFillCloudsFill className='text-white text-[250px] mt-8  mb-4' />
      );
      break;

    case '10d':
      icon = <FaCloudSunRain className='text-white text-[250px] mt-8  mb-4' />;
      break;

    case '10n':
      icon = <FaCloudMoonRain className='text-white text-[250px] mt-8  mb-4' />;
      break;

    case '11d':
    case '11n':
      icon = (
        <BsFillCloudLightningRainFill className='text-white text-[250px] mt-8  mb-4' />
      );
      break;

    case '13d':
    case '13n':
      icon = (
        <BsFillCloudSnowFill className='text-white text-[250px] mt-8  mb-4' />
      );
      break;

    case '50d':
    case '50n':
      icon = (
        <BsFillCloudFogFill className='text-white text-[250px] mt-8  mb-4' />
      );
      break;

    default:
      break;
  }

  return (
    <div className='bg-black h-[99%] w-[99%] rounded-2xl text-center'>
      <div className='text-white text-4xl m-2'>{placeName}</div>
      <div className='flex justify-center flex-col flex-wrap '>
        <div className='m-auto'>
          {icon}
          <div className='text-white text-3xl mb-8'>{weatherDescription}</div>
        </div>
      </div>
      <div className='text-white text-7xl'>{temp}</div>
    </div>
  );
};

export default WeatherData;
