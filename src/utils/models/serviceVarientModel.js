import mongoose from "mongoose";

const servicVarientSchema = new mongoose.Schema({
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
});

const ServiceVarient =
  mongoose.models.serviceVarient ||
  mongoose.model("serviceVarient", servicVarientSchema);

export default ServiceVarient;
