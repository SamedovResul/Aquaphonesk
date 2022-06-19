import mongoose from "mongoose";

const temprature = mongoose.Schema({
  temp:{
    type:Number,
  },
  moisture:{
    type:Number
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const tempratureDataSchema = mongoose.model("SoilData", temprature)

export default tempratureDataSchema