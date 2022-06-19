import mongoose from "mongoose";

const water = mongoose.Schema({
  level:{
    type:Number,
  },
  flow:{
    type:Number
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const waterDataSchema = mongoose.model("waterdata", water)

export default waterDataSchema