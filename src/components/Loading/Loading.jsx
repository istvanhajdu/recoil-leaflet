import React from 'react';
import RotateLoader from 'react-spinners/RotateLoader';
import './Loading.scss';

export default function Loading() {
  return (
    <div className='map-loader'>
      <RotateLoader size={30} color={'#2f89cd'} />
    </div>
  );
}
