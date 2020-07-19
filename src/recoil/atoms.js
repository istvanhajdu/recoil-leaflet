import { atom } from 'recoil';

// Location states
export const locationCountState = atom({
  key: 'locationCountState',
  default: 1000,
});

export const selectedLocationState = atom({
  key: 'selectedLocationState',
  default: null,
});

// Leaflet map states
export const mapCenterState = atom({
  key: 'mapCenterState',
  default: [19, 41],
});

export const mapZoomState = atom({
  key: 'maZoomState',
  default: 2,
});
