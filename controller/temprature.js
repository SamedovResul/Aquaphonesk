import mongoose from 'mongoose';
import generalDataSchema from '../models/generalData.js';
import AirtempratureDataSchema from '../models/AirTemprature.js';
import SoiltempratureDataSchema from '../models/SoilTemprature.js';
import waterDataSchema from '../models/watermodel.js';

export const tempratureGet = async (req,res) =>{
 
  try {
    const generalData = await generalDataSchema.findOne({_id: "mk298anwgkeni61wy5m6uefbk"})
    
    

    res.status(201).json(generalData);
  } catch (error) {
    res.status(500).json(error.message)
  }

}


export const tempraturePost = async (req,res) =>{
  const {airTemp,soilTemp,humidity,moisture,flow,level} = req.body
  // console.log(req.body)
  try {
    let generalData = await generalDataSchema.findOne({_id:"mk298anwgkeni61wy5m6uefbk"})
    if(!generalData){
      generalData = new generalDataSchema({
        _id:"mk298anwgkeni61wy5m6uefbk"
      })
    }
    

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



    // await airTemprature.save();
    // await soilTemprature.save();
    // await waterData.save();
    
    if(airTemprature && soilTemprature && waterData){
      generalData.AirData.push(airTemprature);
      generalData.SoilData.push(soilTemprature);
      generalData.WaterData.push(waterData);
    }
    
    await generalData.save();

    
    res.status(201).json(generalData)

    

  } catch (error) {
    res.status(500).json(error.message)
  }
}