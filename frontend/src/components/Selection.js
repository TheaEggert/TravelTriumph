import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getCities } from '../service';

export default function Selection({setAppDescription, setCitySelected, setLatitude, setLongitude}) {
  const [selectedCity, setSelectedCity] = useState('');
  const [cityList, setCityList] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getCities();
      const tempList = [];
      for (let i = 0; i < res.length; i += 1) {
          tempList.push(res.cities[i]);
      }
      setCityList(res.cities);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {

    for (const element of cityList) {
      if (element.label === event.target.value) {
        setAppDescription(element.description);
        setLatitude(element.latitude);
        setLongitude(element.longitude);
      }
    }
    setSelectedCity(event.target.value);
    setCitySelected(true);
  };

  return (
      <div>
        <FormControl sx={{ m: 1, width: '45%' }}>
          <InputLabel id="selection-label">Select a city</InputLabel>
          <Select
            id='selection-bar'
            value={selectedCity}
            onChange={handleChange}
            label="Select a city"
          >
            {cityList.map((city) => (
              <MenuItem key={city.name} value={city.label}>{city.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
  );
}
