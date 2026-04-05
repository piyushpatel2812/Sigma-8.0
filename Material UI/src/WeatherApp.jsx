import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jabalpur",
        feelsLike: 30.81,
        humidity: 35,
        temp: 31.47,
        tempMax: 31.47,
        tempMin: 31.47,
        weather: "few clouds",
    });
 let updateInfo = (result)=>{
    setWeatherInfo(result);
 }


    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}