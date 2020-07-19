import React, { Suspense } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { useRecoilValue } from 'recoil';
import { mapCenterState, mapZoomState } from '../../recoil/atoms';

import LocationList from '../LocationList';
import Loading from '../Loading';

export default function MapView() {
  const zoomState = useRecoilValue(mapZoomState);
  const centerState = useRecoilValue(mapCenterState);

  return (
    <Map center={centerState} zoom={zoomState} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Suspense fallback={<Loading />}>
        <LocationList></LocationList>
      </Suspense>
    </Map>
  );
}
