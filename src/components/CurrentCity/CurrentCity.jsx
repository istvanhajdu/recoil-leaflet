import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedLocationState } from '../../recoil/atoms';

import './CurrentCity.scss';

export default function CurrentCity() {
  const location = useRecoilValue(selectedLocationState);

  return (
    <div className='coordinates-box'>
      <span className='coordinates-box-value'> {location ? location.city : ''}</span>
    </div>
  );
}
