import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import MapView from './components/MapView';
import SearchLocation from './components/SearchLocation';
import CurrentCity from './components/CurrentCity';
import SelectLocationCount from './components/SelectLocationCount';

import 'leaflet/dist/leaflet.css';
import './App.scss';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <SelectLocationCount></SelectLocationCount>
        <MapView></MapView>
        <Suspense fallback={''}>
          <SearchLocation></SearchLocation>
        </Suspense>

        <CurrentCity></CurrentCity>
      </div>
    </RecoilRoot>
  );
}

export default App;
