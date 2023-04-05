import connectMongo from "../../utils/connectMongo";
import Service from "../../utils/models/serviceModel";
import ServiceVarient from "../../utils/models/serviceVarientModel";

export default async function handler(req, res) {
  await connectMongo();
  console.log("DB Connected");
  if (req.method === "GET") {
    try {
      const serviceVarients = await ServiceVarient.find({});
      console.log(serviceVarients);
      res.status(200).json({
        message: "Success",
        data: serviceVarients,
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
      const serviceId = req.body.serviceId;
      const serviceVarient = await ServiceVarient.create(req.body);

      await Service.updateOne(
        { _id: serviceId },
        {
          $push: {
            service_varients: serviceVarient._id,
          },
        }
      );

      res.status(200).json({
        message: "Success",
        data: serviceVarient,
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
      const deletedItem = await ServiceVarient.deleteOne({ _id: req.body.id });
      res.status(200).json({
        message: "Success",
        data: deletedItem,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed",
        error: error.message,
      });
    }
  }
}
