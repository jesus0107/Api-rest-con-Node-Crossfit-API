const DB  = require('./db.json')
const { saveToDataBase } = require('./utils')

const getAllWorkouts = async () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error,
        }
    }
}

const createdNewWorkout = async (newWorkout) => {
    try {
        const isExists = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if(isExists){
            throw {
                status: 400,
                message: `Workout with the name '${newWorkout.name}' already exists`,
            };
        }
        DB.workouts.push(newWorkout);
        saveToDataBase(DB);
        return newWorkout;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error,
        }
    }

}

const getWorkout = async (id) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === id);
        if(!workout){
            throw {
                status: 404,
                message: `Workout is not exists`,
            };
        }
    return workout;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error,
        }
    }
}

const updateWorkout = async (id, changes) => {
    try {
        const workoutIndex= DB.workouts.findIndex((workout) => workout.id === id);
        if(workoutIndex === -1){
            throw {
                status: 404,
                message: `Can't find workout with the id '${workoutIndex}'`,
            };
        }
        const workoutToUpdate = {
            ...DB.workouts[workoutIndex],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})

        }
        DB.workouts[workoutIndex] = workoutToUpdate;
        saveToDataBase(DB)
        return DB.workouts[workoutIndex];

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const deleteOneWorkout =  (id) => {
    try {
        const workoutIndex= DB.workouts.findIndex((workout) => workout.id === id);
        if(workoutIndex === -1){
            throw {
                status: 404,
                message: `Can't find workout with the id '${workoutIndex}'`,
            };
        }
        DB.workouts.splice(workoutIndex, 1);
        saveToDataBase(DB)
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }

}
module.exports = { getAllWorkouts, createdNewWorkout, getWorkout, updateWorkout, deleteOneWorkout };
