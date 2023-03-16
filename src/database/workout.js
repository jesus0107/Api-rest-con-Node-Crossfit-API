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
module.exports = { getAllWorkouts, createdNewWorkout };
