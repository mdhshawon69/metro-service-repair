import connectMongo from "../../utils/connectMongo";
import Service from "../../utils/models/serviceModel";

export default async function handler(req, res) {
  await connectMongo();
  console.log("DB Connected");
  if (req.method === "GET") {
    try {
      const services = await Service.find({});
      console.log(services);
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
}
