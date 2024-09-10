
import mongooose from "mongoose"

const doctorSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true

  },
  qualification:{
    type: String,
    required: true
  },
  experienceInYears:{
    type: Number,
    default: 0
  },
  worksInHospitals:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',

    },
    
  ]

}, {timestamp: true });

export const Doctor = mongooose.model(
  'Doctor' ,
  doctorSchema
);