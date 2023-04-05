import connectMongo from "../../utils/connectMongo";
import Service from "../../utils/models/serviceModel";
import ServiceVarient from "../../utils/models/serviceVarientModel";

export default async function handler(req, res) {
  await connectMongo();
  console.log("DB Connected");
  if (req.method === "GET") {
    try {
      await ServiceVarient.find({});
      const services = await Service.find({}).populate("service_varients");

      res.status(200).json({
        message: "Success",
        data: services,
      });
    } catch (error) {
      res.json({
        message: error.message,
        error: error,
      });
    }
  }

  if (req.method === "POST") {
    try {
      console.log(req.body);
      const service = await Service.create(req.body);
      res.status(200).json({
        message: "Success",
        data: service,
      });
    } catch (error) {
      res.json({
        message: error.message,
        error: error,
      });
    }
  }

  if (req.method === "DELETE") {
    try {
      const data = await Service.deleteOne({ _id: req.body.id });
      res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed",
        error: error.message,
      });
    }
  }
}
