const express = require("express")
const router = express.Router();
const workoutsController = require('../../controllers/workouts.controller')

router.get("/", workoutsController.getAllWorkouts);

router.get("/:id", workoutsController.getOneWorkout);

router.post("/", workoutsController.createOneWorkout);

router.delete("/:id", workoutsController.deleteOneWorkout);

router.patch("/:id", workoutsController.updateOneWorkout);

module.exports = router;
