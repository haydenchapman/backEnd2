//this is a controller
//thing
const houses = require("./db.json");
const globalId = 4;
//controls
module.exports = {
getHouses: (req, res) => {
    res.status(200).send(houses);

  },

  deleteHouse: (req, res) => {
    let index = houses.findIndex((houses) => +houses.id === +id)
    houses.splice(index,1);
    res.status(200).send(houses)
  },

  createHouse: (req, res) => {
    let {address, price, imageURL} = req.body
    let newHouse = {
        id: houseId, address, imageURL, price
    }
    res.status(200).send(houses);
  },

  updateHouse: (req, res) => {
    let {id} = req.params;
    let {type} = req.body;
    let index = houses.findIndex((house) => +house.id === +id)
    if (houses[index].price <= 0 && type === "minus") {
        res.status(400).send('You cannot go below 0');
      } else if (type === 'minus' && houses[index].price > 0) {
        houses[index].price -= 10000;
        res.status(200).send(houses);
      } else if (type === 'plus' && houses[index].price < 0) {
        houses[index].price += 10000;
        res.status(200).send(houses);
      } else {
        res.sendstatus(400);
    }
    }
}

