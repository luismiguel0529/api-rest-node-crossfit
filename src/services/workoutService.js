const workout = require("../database/Workout")
const { v4: uuid } = require('uuid');

const getAllWorkouts = () => {
    return workout.getAllWorkouts();
};
const getOneWorkout = (req, res) => {
    return ;
};
const createNewWorkout = (newWorkout) => {
    var options = {  };
    options.timeZone = 'UTC';
    const workoutToInsert = {
        ...newWorkout,
        id: uuid,
        createdAt: new Date().toLocaleString("es-CO", 'UTC'),
        updateAt: new Date().toLocaleString("es-CO", 'UTC')
    }

    return workout.createNewWorkout(workoutToInsert);
};
const updateOneWorkout = (req, res) => {
    return ;
};
const deleteOneWorkout = (req, res) => {
    return ;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
