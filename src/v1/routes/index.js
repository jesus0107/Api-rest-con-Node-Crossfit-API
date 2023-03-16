const express = require('express');
const workoutsRouter = require('./workouts.router')

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use('/workouts', workoutsRouter);

}
module.exports = routerApi;
