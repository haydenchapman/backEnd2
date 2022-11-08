//ayo its a server
const express = require("express");
const cors = require("cors");
const baseHouse = "/api/houses/";
const app = express();
app.use(cors());
app.use(express.json());

const { getHouses, deleteHouse, createHouse, updateHouse,
  } = require("./controller");

app.get(baseHouse, getHouses);
app.delete(`${baseHouse}` + ":id", deleteHouse);
app.post(baseHouse, createHouse);
app.put(`${baseHouse}` + ":id", updateHouse);

const port = 4004;
app.listen(port, console.log("you are on 4004"));