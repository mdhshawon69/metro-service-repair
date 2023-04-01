import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  service_varients: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ServiceVarient",
    },
  ],
  is_active: {
    required: true,
    type: Boolean,
  },
});

const Service =
  mongoose.models.service || mongoose.model("service", serviceSchema);

export default Service;
