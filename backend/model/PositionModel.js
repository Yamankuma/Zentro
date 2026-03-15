const {model} = require("mongoose");
const PositionSchema = require("../schemas/PositionSchema")


let PositionModel = new model('position', PositionSchema);

module.exports = PositionModel;