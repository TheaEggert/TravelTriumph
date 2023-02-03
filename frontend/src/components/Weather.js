/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState } from 'react';

export default function Weather({latitude, longitude}) {

    const [conditions, setConditions] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    // asynchronous function to fetch data from the API
    const fetchData = React.useCallback(async () => {
        const result = await axios(apiURL);
        setConditions(result.data.weather[0].description);
    }, [apiURL]);

    React.useEffect(() => {
        fetchData()
    }, [fetchData]);

    return(
        <div>
            <div style={{ color: "GrayText", marginTop: "30px" }}>Weather</div>
            {"weather is: " + conditions}
        </div>
    );
}