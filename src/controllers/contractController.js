import users from "../models/Contract.js";

class ContractController {

  static registerUser = (req, res) => {
    let contracts = new contracts(req.body);

    contracts.save((err) => {
        if(err){
            res
            .status(500)
            .send({ message: `${err.message} - Error registering contract.` });
        }else{
            res.status(201).send(contracts.toJSON());
        }
    });
  };
  
}

export default ContractController;
