export const PostFunction = (parametr) =>{

  const tempraturePost = async (req,res) =>{
    const {temp} = req.body
    const {SoilTempratureDataSchema} =  parametr
    try {
      
      const temprature = SoilTempratureDataSchema({
        temp:temp
      })
  
      await temprature.save() 
  
    
      res.status(201).json(temprature)
  
      
  
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  return tempraturePost

}