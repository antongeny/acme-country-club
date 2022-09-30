const { Member, Booking, Facility } = require("./db");

const Sequelize = require("sequelize");
const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, (test) => {
	console.log(`Connected to: http://localhost:${PORT}`);
});
