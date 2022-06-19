import mongoose from "mongoose";

const generalData = mongoose.Schema({
  AirData:Array,
  SoilData:Array,
  WaterData:Array,
})

const generalDataSchema = mongoose.model("generalDataSchema", generalData)

export default generalDataSchema