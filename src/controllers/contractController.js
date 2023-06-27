import contracts from "../models/Contract.js";
import users from "../models/Contract.js";

class ContractController {
  static createContract = (req, res) => {
    let contracts = new contracts(req.body);

    contracts.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Error registering contract.` });
      } else {
        res.status(201).send(contracts.toJSON());
      }
    });
  };

  static listContractById = (req, res) => {
    const id = req.params.id;

    contracts.findById(id, (err, contract) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} Id contract not found` });
      } else {
        res.status(200).send(contract);
      }
    });
  };

  static listContract = (req, res) => {
    contracts.find((err, contracts) => {
      res.status(200).json(contracts);
      if(err){
        res.status(400).send({message: `${err.message} Error at find/list contracts`})
      }
    });
  };
}

export default ContractController;
