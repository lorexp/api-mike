const express = require('express');
const router = express.Router();

const { createLocation } = require('../controllers/locations');

router.post('/', async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const location = await createLocation(latitude, longitude);

    return res.status(200).send(location);
  } catch (error) {
    console.log(error);
    return res.status(500).send('internal server error');
  }
});

module.exports = router;
