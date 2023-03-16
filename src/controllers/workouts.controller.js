const workoutService = require("../services/workouts.service")

const getAllWorkouts = (req, res) => {
    const data = workoutService.getAllWorkouts();
    res.status(200).json({
        message: "Ok",
        data: data
    })
}

const createOneWorkout = (req, res) => {
    const body = req.body;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
        ){
            return console.log("Algo pasa")
    }
    const newWorkout = {...body};
    console.log(newWorkout)
    const createdWorkout = workoutService.createOneWorkout(newWorkout)
    res.status(201).json({
        message: "Ok",
        data: createdWorkout
    });
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout()
    res.send(`Get a Workout from ${req.params}`)
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout()
    res.send(`Delete all Workouts from ${req.params}`)
}

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout()
    res.send(`Update all Workouts from ${req.params}`)
}

module.exports ={
    getAllWorkouts,
    createOneWorkout,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
