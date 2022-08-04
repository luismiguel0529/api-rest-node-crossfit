const workoutService = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
    res.send({ status: "OK", data: workoutService.getAllWorkouts()});
};

const getOneWorkout = (req, res) => {
    workoutService.getOneWorkout(req.params.workoutId);
    res.send({ status: "OK", data:`Get workout ${req.params.workoutId}`});
};

const createNewWorkout = (req, res) => {
    const { body } = req;
    // *** ADD ***
    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      return;
    }
    // *** ADD ***
    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };
    const createNewWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createNewWorkout})
};

const updateOneWorkout = (req, res) => {
    workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`)
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId)
    res.send(`Get workout ${req.params.workoutId}`)
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
