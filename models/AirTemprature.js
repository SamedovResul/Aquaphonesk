import mongoose from "mongoose";

const temprature = mongoose.Schema({
  temp:{
    type:Number,
  },
  humidity:{
    type:Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const tempratureDataSchema = mongoose.model("AirData", temprature)

export default tempratureDataSchema