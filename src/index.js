const express = require("express");
const v1Router = require("./v1/routes")
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('<h1>Hello World!!</h1>')
} );


app
    .use(express.json())
    .use("/api/v1", v1Router)
    .use("/api/v1/workouts",v1WorkoutRouter);


app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`))
