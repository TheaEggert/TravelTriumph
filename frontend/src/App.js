import React, { useState } from 'react';
import { MdAirplaneTicket } from 'react-icons/md';
import './App.css';
import Selection from './components/Selection';
import Description from './components/Description';
import Weather from './components/Weather';

function App() {

  const [appDescription, setAppDescription] = useState('');
  const [citySelected, setCitySelected] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <MdAirplaneTicket className='App-logo' />
      </header>
      <header className="App-name">
        TravelTriumph
      </header>
      <div style={{marginTop: "10px"}}>
        <Selection
        setAppDescription={setAppDescription}
        setCitySelected={setCitySelected}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        />
      </div>
      <div className='description'>
        {citySelected && <Description appDescription={appDescription}/>}
        {citySelected && <Weather latitude={latitude} longitude={longitude} />}
      </div>
    </div>
  );
}

export default App;
