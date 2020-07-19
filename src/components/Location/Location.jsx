import React from 'react';
import { CircleMarker } from 'react-leaflet';
import { useSetRecoilState } from 'recoil';
import { selectedLocationState } from '../../recoil/atoms';

export default function Location({ coordinates, id, city }) {
  const setselectedLocationState = useSetRecoilState(selectedLocationState);

  const onLocationOver = (event) => {
    event.target.setStyle({ color: 'blue' });
    const { properties } = event.target.options;
    setselectedLocationState(properties);
  };

  const onLocationOut = (event) => {
    event.target.setStyle({ color: 'green' });
    setselectedLocationState(null);
  };

  return (
    <CircleMarker
      key={id}
      center={{ lat: coordinates[0], lng: coordinates[1] }}
      radius={6}
      properties={{ coordinates, id, city }}
      color={'green'}
      onMouseOver={onLocationOver}
      onMouseOut={onLocationOut}
    ></CircleMarker>
  );
}
