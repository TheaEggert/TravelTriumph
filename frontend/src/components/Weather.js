/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState } from 'react';

export default function Weather({latitude, longitude}) {

    const [conditions, setConditions] = useState([]);
    const [temp, setTemp] = useState([]);
    const [hi, setHi] = useState([]);
    const [lo, setLo] = useState([]);
    const [icon, setIcon] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    // asynchronous function to fetch data from the API
    const fetchData = React.useCallback(async () => {
        const result = await axios(apiURL);
        setConditions(result.data.weather[0].main);
        setTemp(Math.round(result.data.main.temp));
        setHi(Math.round(result.data.main.temp_max));
        setLo(Math.round(result.data.main.temp_min));
        setIcon(result.data.weather[0].icon);
    }, [apiURL]);

    React.useEffect(() => {
        fetchData()
    }, [fetchData]);

    return(
        <div>
            <div style={{ color: "GrayText", marginTop: "30px" }}>Current weather</div>
            <br></br>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
            <div>
                <br></br>
                {conditions}
            </div>
            <div style={{ fontSize: "35px" }}>
                {temp}&deg;C
            </div>
            <br></br>
            <div>
                {"H: " + hi}&deg;C
            </div>
            <div>
                {"L: " + lo}&deg;C
            </div>
        </div>
    );
}