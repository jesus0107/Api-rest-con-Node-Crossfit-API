const workoutService = require("../services/workouts.service")

const getAllWorkouts = async (req, res) => {
    try {
        const data = await workoutService.getAllWorkouts();
        res.status(200).json({
            message: "Ok",
            data: data
        })
    } catch (error) {
        res.status(error?.status || 500).json({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        })
    }
}

const createOneWorkout = async (req, res) => {
    const { body } = req;
    const newWorkout = {...body};
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
        ) {
        res
            .status(400)
            .send({
            status: "FAILED",
            data: {
                error:
                "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
            },
            });
        return;
    }
    try {
        const createdWorkout = await workoutService.createOneWorkout(newWorkout);
        res.status(201).json({
            message: "Ok",
            data: createdWorkout
        });
    } catch (error) {
        res.status(error?.status || 500).json({
            status: "FAILED",
            data: error?.message || error
        });
    }

}

const getOneWorkout = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        res.status(400).json({
            status: "FAILED",
            data: {error: "Parameter id is required"}
        })
    }
    try {
        const workout = await workoutService.getOneWorkout(id)
        res.status(200).json({
            message: "Ok",
            data: workout
        });
    } catch (error) {
        res.status(error?.status || 400).json(error)
    }
}

const updateOneWorkout = async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    console.log(id)
    if(!id){
        res.status(400).json({
            status: "FAILED",
            data: {
                error: "Parameter ':id' can not be empty"
            }
        })
    }
    try {
        const updatedWorkout = await workoutService.updateOneWorkout(id, body)
        res.status(200).json({
            message: "Workout updated",
            data: updatedWorkout
        });
    } catch (error) {
        res.status(error?.status).json({
            status: "FAILED",
            message: error?.message
        })
    }
}

const deleteOneWorkout = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        res.status(400).json({
            status: "FAILED",
            data: {error: "Parameter id is required"}
        })
    }
    try {
        await workoutService.deleteOneWorkout(id);
        res.status(204).json({
            message: "Workout removed"
        })
    } catch (error) {
        res
            .status(error?.status || 500)
            .json({
            message: `${error}`
        })
    }
}



module.exports ={
    getAllWorkouts,
    createOneWorkout,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
