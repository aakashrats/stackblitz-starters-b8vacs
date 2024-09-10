import mongooose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamp: true }
);

export const Hospital = mongooose.model('Hospital', hospitalSchema);
