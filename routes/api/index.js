const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

router.user('/workout',workoutRoutes);

module.exports = router; 