import mongoose from 'mongoose';
import generalDataSchema from '../models/generalData.js';
import AirtempratureDataSchema from '../models/AirTemprature.js';
import SoiltempratureDataSchema from '../models/SoilTemprature.js';
import waterDataSchema from '../models/watermodel.js';

export const tempratureGet = async (req,res) =>{
 
  try {
    const generalData = await generalDataSchema.findOne({_id: "62af050cc94e5ed195f7d367"})

    const airTemprature =  await AirtempratureDataSchema.find();
    const soilTemprature = await SoiltempratureDataSchema.find();
    const waterData = await waterDataSchema.find()

    // if(airTemprature && soilTemprature && waterData){
    //   generalData.AirData.push(airTemprature[airTemprature.length - 1]);
    //   generalData.SoilData.push(soilTemprature[soilTemprature.length - 1]);
    //   generalData.WaterData.push(waterData[waterData.length - 1]);
    // }
    
    // await generalData.save();

    res.status(201).json(generalData);
  } catch (error) {
    res.status(500).json(error.message)
  }

}


export const tempraturePost = async (req,res) =>{
  const {airTemp,soilTemp,humidity,moisture,flow,level} = req.body
  // console.log(req.body)
  try {
    
    const airTemprature = AirtempratureDataSchema({
      temp:airTemp,
      humidity:humidity
    })

    const soilTemprature = SoiltempratureDataSchema({
      temp:soilTemp,
      moisture:moisture
    })

    const waterData = waterDataSchema({
      level:level,
      flow:flow
    })

    await airTemprature.save();
    await soilTemprature.save();
    await waterData.save();
    


    
    res.status(201).json({airTemprature,soilTemprature,waterData})

    

  } catch (error) {
    res.status(500).json(error.message)
  }
}