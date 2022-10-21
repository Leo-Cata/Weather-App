import React from 'react';

const WeatherData = ({ data }) => {
  console.log(data);

  //gets the icon ID by going into weather array position 0 and getting .icon
  const icon = data.weather[0].icon;
  console.log(icon);

  //saves it cause idk how to put it straight to src
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className='flex bg-black h-[99%] w-[99%] rounded-2xl'>
      <img src={weatherIcon} alt='' />
    </div>
  );
};

export default WeatherData;
