import { selector } from 'recoil';
import { locationCountState } from './atoms';
import { generateLocations } from '../service';

export const locationsQuery = selector({
  key: 'locationsQuery',
  get: async ({ get }) => {
    try {
      const places = await generateLocations(get(locationCountState));
      return places;
    } catch (error) {
      throw error;
    }
  },
});


// Reach fetch places
export const locationsState = selector({
  key: 'locationsState',
  get: ({ get }) => {
    const places = get(locationsQuery);
    return places;
  },
});
