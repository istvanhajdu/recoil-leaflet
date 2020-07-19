import faker from 'faker';

export const generateLocations = (count) =>
  new Promise((resolve) =>
    setTimeout(() => {
      const places = [];
      for (let i = 0; i < count; i++) {
        const placeObject = {
          id: i,
          coordinates: [faker.address.latitude(), faker.address.longitude()],
          city: faker.address.city(),
        };

        places.push(placeObject);
      }

      resolve(places);
    }, 2000)
  );
