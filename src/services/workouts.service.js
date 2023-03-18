const workout = require('../database/workout');
const { v4: uuid } = require('uuid');

const getAllWorkouts = () =>{
    const workouts = workout.getAllWorkouts()
    return workouts;
};

const createOneWorkout = (newWorkout) =>{
    const workoutToInsert = {
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updateAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    }
    const createdWorkout = workout.createdNewWorkout(workoutToInsert)
    return createdWorkout;
};

const getOneWorkout = (id) =>{
    const getedworkout = workout.getWorkout(id);
    return getedworkout;
};

const updateOneWorkout = (id, changes) =>{
    const workoutUpdated = workout.updateWorkout(id, changes);
    return workoutUpdated;
};

const deleteOneWorkout = () =>{

};



module.exports = {
    getAllWorkouts,
    createOneWorkout,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
