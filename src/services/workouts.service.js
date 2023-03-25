const workout = require('../database/workout');
const { v4: uuid } = require('uuid');

const getAllWorkouts = async () =>{
    try {
        const workouts = await workout.getAllWorkouts()
        return workouts;
    } catch (error) {
        throw error;
    }
};

const createOneWorkout = async (newWorkout) =>{
    const workoutToInsert = {
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    }
    try {
        const createdWorkout = await workout.createdNewWorkout(workoutToInsert)
        return createdWorkout;
    } catch (error) {
        throw error;
    }
};

const getOneWorkout = async (id) =>{
    try {
        const getedworkout = workout.getWorkout(id);
        return getedworkout;
    } catch (error) {
        throw error;
    }
};

const updateOneWorkout = async (id, changes) =>{
    try{
        const workoutUpdated = workout.updateWorkout(id, changes);
        return workoutUpdated;
    } catch (error){
        throw error;
    }
};

const deleteOneWorkout = async (id) =>{
    try {
        await workout.deleteOneWorkout(id);
    } catch (error) {
        throw error;
    }
};



module.exports = {
    getAllWorkouts,
    createOneWorkout,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
