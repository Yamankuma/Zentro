const mongoose= require("mongoose");
const HoldingSchema = require("../schemas/HoldingSchema")


let HoldingModel = mongoose.model('holding', HoldingSchema);

module.exports = HoldingModel;
