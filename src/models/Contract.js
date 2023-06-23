import mongoose from "mongoose";

const contractSchema = new mongoose.Schema(
    {
        id: {type: String},
        totalValue: {type: Number},
        installmentQuantity: {type: Number},
        instalments: {type: String},
        pendingAmount: {type: Number}
    }
);

const contracts = mongoose.model("contracts", contractSchema)

export default contracts;