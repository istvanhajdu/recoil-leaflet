import React from 'react';
import Location from '../Location';
import { useRecoilValue } from 'recoil';
import { locationsQuery } from '../../recoil/selectors';

export default function LocationList() {
  const locations = useRecoilValue(locationsQuery);

  return locations.map((location) => <Location key={location.id} {...location}></Location>);
}
