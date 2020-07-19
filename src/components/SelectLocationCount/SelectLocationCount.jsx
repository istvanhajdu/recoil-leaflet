import React from 'react';
import Select from 'react-select';
import { useSetRecoilState } from 'recoil';
import { locationCountState } from '../../recoil/atoms';
import './SelectLocationCount.scss'

const LOCATION_COUNT_OPTIONS = [
  { value: 10, label: '10' },
  { value: 100, label: '100' },
  { value: 500, label: '500' },
  { value: 1000, label: '1000' },
  { value: 3000, label: '3000' },
  { value: 5000, label: '5000' },
];

export default function SelectPlaceCount() {
  const setNumberOfLocation = useSetRecoilState(locationCountState);

  const onSelectPlacesCount = (event) => {
    const {
      value,
    } = event;
    setNumberOfLocation(value);
  };

  return (
    <div className='location-count-select'>
      <Select options={LOCATION_COUNT_OPTIONS} onChange={onSelectPlacesCount} defaultValue={LOCATION_COUNT_OPTIONS[3]}/>
    </div>
  );
}
