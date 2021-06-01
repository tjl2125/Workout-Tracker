const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => Date.now(),
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            require: "Enter what type of exercise this is"
        },
        name: {
            type: String,
            trim: true,
            require: "Enter the name of exercise"
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
      },  
    ],
    totalDuration: {
        type: Number, 
        default: 0,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 