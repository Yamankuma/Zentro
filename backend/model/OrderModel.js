const {model} = require("mongoose");
const OrderSchema = require("../schemas/OrderSchema")


let OrderModel = new model('order', OrderSchema);

module.exports = OrderModel;