const Locations = require('../models/Locations');

async function createLocation(latitude, longitude) {
  try {
    const location = await Locations.create({
      latitude,
      longitude,
    });

    return location;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createLocation,
};
