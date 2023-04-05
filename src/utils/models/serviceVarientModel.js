import mongoose from "mongoose";

const ServiceVarientSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  what_includes: {
    type: Array,
  },
  ac_weight: {
    type: String,
  },
});

const ServiceVarient =
  mongoose.models.ServiceVarient ||
  mongoose.model("ServiceVarient", ServiceVarientSchema);

export default ServiceVarient;
