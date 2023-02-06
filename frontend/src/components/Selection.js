// Refactor this file

import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Selection.css';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
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

    for (let i = 0; i < cityList.length; i += 1) {
      if (cityList[i].label === event.target.value) {
        setAppDescription(cityList[i].description);
        setLatitude(cityList[i].latitude);
        setLongitude(cityList[i].longitude);
      }
    }
    setSelectedCity(event.target.value);
    setCitySelected(true);
  };

  // todo: refactor (see MUI 'Selection' webpage)
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(0.7),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  return (
    <div className="selection-bg">
      <div className="selection">
        <FormControl sx={{ m: 1, width: '45%' }}>
          <InputLabel id="selection-label">Select a city</InputLabel>
          <Select
            id='selection-bar'
            value={selectedCity}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            {cityList.map((city) => (
              <MenuItem key={city.name} value={city.label}>{city.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
