const DB  = require('./db.json')
const { saveToDataBase } = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts;
}

const createdNewWorkout = (newWorkout) => {
    const isExists = DB.workouts.findIndex(
        (workout) => workout.name === newWorkout.name
        ) > -1;
    if(isExists){
        return console.log("Algo paso")
    }
    DB.workouts.push(newWorkout);
    saveToDataBase(DB);
    return newWorkout;
}

const getWorkout = (id) => {
    const workout = DB.workouts.find((workout) => workout.id === id);
    if (!workout){
        return console.log("No existe")
    }
    return workout;
}

const updateWorkout = (id, changes) => {
    const workoutIndex= DB.workouts.findIndex((workout) => workout.id === id);
    console.log(workoutIndex)
    if (!workoutIndex){
        return console.log("No existe")
    }
    const workoutToUpdate = {
        ...DB.workouts[workoutIndex],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})

    }
    DB.workouts[workoutIndex] = workoutToUpdate;
    console.log(workoutToUpdate)
    saveToDataBase(DB)
    return DB.workouts[workoutIndex];
}

const deleteOneWorkout = (id) => {
    const workoutIndex= DB.workouts.findIndex((workout) => workout.id === id);
    if (!workoutIndex){
        return console.log("No existe")
    }
    DB.workouts.splice(workoutIndex, 1);
    saveToDataBase(DB)
    return;
}
module.exports = { getAllWorkouts, createdNewWorkout, getWorkout, updateWorkout, deleteOneWorkout };
