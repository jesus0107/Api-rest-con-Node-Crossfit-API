const workout = require('../database/workout');
const { v4: uuid } = require('uuid');

const getAllWorkouts = () =>{
    const workouts = workout.getAllWorkouts()
    return workouts;
};

const createOneWorkout = (newWorkout) =>{
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updateAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    }
    const createdWorkout = workout.createdNewWorkout(workoutToInsert)
    return createdWorkout;
};

const getOneWorkout = () =>{

};

const deleteOneWorkout = () =>{

};

const updateOneWorkout = () =>{

};

module.exports = {
    getAllWorkouts,
    createOneWorkout,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
