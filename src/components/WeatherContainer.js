import { useState } from 'react';
import { WeatherForm } from './WeatherForm';
import { CityList } from './CityList';
import './WeatherContainer.css';

const API_KEY = process.env.REACT_APP_API_KEY

export const WeatherContainer = () => {
    
    const [cityWeather, setCityWeather] = useState({
        key: "",
        cityName: "",
        localDateTime: "",
        tempDegrees: "",
        conditions: ""
    }); 

    const [cityList, setCityList] = useState([]);

    const citySearch = (e) => {
        e.preventDefault();
        const city = e.target[0].value;
        const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
        const randomKey = Math.floor(Math.random() * 1000000000);

        fetch(url)
        .then((response) => {
            console.log("response", response);
            return response.json();
        })
        .then((data) => {
            console.log("data", data)
            const newCity = ({
                key: randomKey,
                cityName: data.location.name,
                localDateTime: data.location.localtime,
                tempDegrees: `${data.current.temp_c}°C`,
                conditions: data.current.condition.text
            })
            setCityWeather(newCity)

            const myCities = [...cityList];
            myCities.push(newCity)
            setCityList(myCities)
            console.log(cityList)
        })
        

    }
    
    return (
        <div className="container">
            <div className="heading">
                <h1>Snap Weather App</h1>
                <h3>Get your weather in a snap!</h3>
            </div>
            <WeatherForm getWeather={citySearch} />
            <CityList list={cityList}/>
        </div>
    )  
};   




