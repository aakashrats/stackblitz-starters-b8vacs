import mongooose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedwith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender:{
      type: String,
      enum: ["M", "F", "O"],
      required: true

    },
    admittedIn: {
      type: mongooose.Schema.Types.ObjectId,
      ref:"Hostpital",
    },
    
  },
  { timestamp: true }
);

export const Patient = mongooose.model('Patient', patientSchema);
