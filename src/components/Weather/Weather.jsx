import './weather.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Text from '../Text/Text';
import { getWeather } from '../../service';

function Weather() {
   const [apiResponse, setApiResponse] = useState({});

   useEffect(() => {
      getWeather()
         .then(res => setApiResponse(res))
         .catch(e => console.log(e.message));
   }, []);

   const toFarhenheit = kelvin => {
      const result = (Number(kelvin) - 273.15) * (9 / 5) + 32;
      return result;
   };

   if (apiResponse.city) {
      const imgSrc = 'http://openweathermap.org/img/w/' + apiResponse.list[0].weather[0].icon + '.png';
      return (
         <Card>
            <div>
               <Text className="main-location" text={`${apiResponse.city.name}, ${apiResponse.city.country}`} fontSize="30px" />
            </div>
            <div className="image">
               <img src={imgSrc} alt="test" width={90} />
            </div>
            <div>
               <Text
                  className="main-temperature"
                  text={`${toFarhenheit(apiResponse.list[0].main.temp).toFixed(2)}`}
                  isTemperature={true}
                  fontSize="40px"
               />
               <Text className="main-weather" text={apiResponse.list[0].weather[0].main} fontSize="25px" />
            </div>
            <div className="main-detail">
               <div className="details-weather">
                  <Text text="Feel's Like" className="detail-header" fontSize="22px" />
                  <Text
                     className="detail-description"
                     text={toFarhenheit(apiResponse.list[0].main.feels_like).toFixed(2)}
                     isTemperature={true}
                     fontSize="20px"
                  />
               </div>
               <div className="details-weather">
                  <Text text="Wind Speed" className="detail-header" fontSize="22px" />
                  <Text text={`${apiResponse.list[0].wind.speed} km/h`} className="detail-description" fontSize="20px" />
               </div>
               <div className="details-weather">
                  <Text text="Description" className="detail-header" fontSize="22px" />
                  <Text text={apiResponse.list[0].weather[0].description} className="detail-description" fontSize="20px" />
               </div>
            </div>
         </Card>
      );
   } else {
      return (
         <div className="center">
            <h1>Loading..</h1>
         </div>
      );
   }
}

export default Weather;
