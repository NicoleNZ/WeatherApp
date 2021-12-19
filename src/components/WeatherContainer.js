import { useState } from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherCard } from './WeatherCard';

const API_KEY = process.env.REACT_APP_API_KEY

export const WeatherContainer = () => {
    
    const [cityWeather, setCityWeather] = useState({
        cityName: "",
        localDateTime: "",
        tempDegrees: "",
        conditions: ""
    }); 

    const citySearch = (e) => {
        e.preventDefault();
        const city = e.target[0].value;
        const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

        fetch(url)
        .then((response) => {
            console.log("response", response);
            return response.json();
        })
        .then((data) => {
            console.log("data", data)
            setCityWeather({
                cityName: data.location.name,
                localDateTime: data.location.localtime,
                tempDegrees: `${data.current.temp_c}°C`,
                conditions: data.current.condition.text
            })
        })

    }
    
    return (
        <div className="container">
            <WeatherForm getWeather={citySearch} />
            <WeatherCard data={cityWeather}/>
            <div className="row">
                <div className="col">
                    <h1>{cityWeather.cityName}</h1>
                    <h2>{cityWeather.localDateTime}</h2>
                    <h2>{cityWeather.tempDegrees}</h2>
                    <h2>{cityWeather.conditions}</h2>

                </div>
            </div>
        </div>
    )  
};   




