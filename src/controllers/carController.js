import cars from "../models/Car.js";

class CarController {
  static listCar = (req, res) => {
    cars.find((err, cars) => {
      res.status(200).json(cars);
    });
  };

  static listCarById = (req, res) => {
    const id = req.params.id;

    cars.findById(id, (err, cars) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id car not found.` });
      } else {
        res.status(200).send(cars);
      }cars
    });
  };

  static registerCar = (req, res) => {
    let car = new cars(req.body);

    car.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Error registering car.` });
      } else {
        res.status(201).send(car.toJSON());
      }
    });
  };

  static updateCar = (req, res) => {
    const id = req.params.id;

    cars.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Successfully updated car" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteCar = (req, res) => {
    const id = req.params.id;

    cars.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Car removed successfully" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default CarController;
