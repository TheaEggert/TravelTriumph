import React, { useState } from 'react';
import { MdAirplaneTicket } from 'react-icons/md';
import './App.css';
import Selection from './components/Selection';
import Description from './components/Description';

function App() {

  const [appSelectedCity, setAppSelectedCity] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [citySelected, setCitySelected] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <MdAirplaneTicket className='App-logo' />
      </header>
      <header className="App-name">
        TravelTriumph
      </header>
      <div style={{marginTop: "10px"}}>
        <Selection setAppSelectedCity={setAppSelectedCity} setAppDescription={setAppDescription} setCitySelected={setCitySelected} />
      </div>
      <div className='description'>
        {citySelected && <Description appDescription={appDescription}/>}
      </div>
    </div>
  );
}

export default App;
