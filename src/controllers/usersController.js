import users from "../models/User.js";

class UserController {
  static listUser = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users);
      if(err){
        res.status(400).send({message: `${err.message} Error at search`})
      }
    });
  };
  static listUserById = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, users) => {
        if(err){
            res
            .status(400).send({message: `${err.message} Id user not found`});
        }else{
            res.status(200).send(users);
        }
    });
  };

  static registerUser = (req, res) => {
    let product = new users(req.body);

    product.save((err) => {
        if(err){
            res
            .status(500)
            .send({ message: `${err.message} - Error registering user.` });
        }else{
            res.status(201).send(product.toJSON());
        }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err)=>{
        if(!err){
            res.status(200).send({ message: "Successfully updated user"});
        }else{
            res.status(500).send({message: err.message});
        }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "User removed sucessfully"});
        }else{
            res.status(500).send({message: err.message});
        }
    });
  }
  
}

export default UserController;