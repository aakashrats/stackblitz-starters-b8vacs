
import mongooose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({}, {timestamp: true });

export const MedicalRecord = mongooose.model(
  'MedicalRecord' ,
  medicalRecordSchema
);