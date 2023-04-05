import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  service_varients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceVarient",
    },
  ],
  is_active: {
    required: true,
    type: Boolean,
  },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;
