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
    const {id} = req.params;
    if (!id) {
        return console.log("Id vacio");
    }
    const workout = workoutService.getOneWorkout(id)
    res.status(200).json({
        message: "Ok",
        data: workout
    });
}

const updateOneWorkout = (req, res) => {
    const {id} = req.params;
    const body = req.body;
    if (!id) {
        return console.log("Id vacio");
    }
    const updatedWorkout = workoutService.updateOneWorkout(id, body)
    res.status(200).json({
        message: "Workout updated",
        data: updatedWorkout
    });
}

const deleteOneWorkout = (req, res) => {
    const {id} = req.params;
    if (!id) {
        return console.log("Id vacio");
    }
    workoutService.deleteOneWorkout(id);
    res.status(204).json({
        message: "Workout removed"
    });
}



module.exports ={
    getAllWorkouts,
    createOneWorkout,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
