import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

// Component imports
import USMap from './components/USMap/USMap';
import StateDetails from './components/StateDetails/StateDetails';

function App() {
  const [ appData, setAppData ] = useState(null);
  const [ selectedState, setSelectedState ] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json';
    axios.get(apiUrl).then(events => {
      setAppData(events.data.data);
    })
  }, []);

  console.log('appData', appData);

  const renderMap = () => {
    return _.map(appData, data => {
      return <div>{ data.state } - { data.name }</div>
    })
  };

  return (
    <Container>
      <MapContainer>
        <USMap handleSelect={ setSelectedState } />
      </MapContainer>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <StateDetails
          data={ appData }
          selectedState={ selectedState }
        />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
`;
const MapContainer= styled.div`
  display: flex;
  flex: 2;
  overflow: hidden;
`;
