const Sequelize = require("sequelize");
//const { db, Member, Facility, Booking } = require("/seed");
const DB_URL =
	process.env.DB_URL || "postgres://localhost:5432/acme-country-club-db";
const db = new Sequelize(DB_URL);

const Member = db.define("member", {
	id: {
		primaryKey: true,
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	// sponsorId: {
	// 	unique: true,
	// 	allowNull: false,
	// },
});
const Facility = db.define("facility", {
	id: {
		primaryKey: true,
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});
const Booking = db.define("booking", {
	id: {
		primaryKey: true,
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	// bookerId: {
	// 	unique: true,
	// 	allowNull: false,
	// },
	// facilityId: {
	// 	unique: true,
	// 	allowNull: false,
	// },
});
//const Member = db.define("member", {})

Member.hasMany(Member, { as: "sponsored", foreignKey: "sponsorId" }); //creates memberId
Member.belongsTo(Member, { as: "sponsor" });

Member.hasMany(Booking);
Booking.belongsTo(Member);

Facility.hasMany(Booking);
Booking.belongsTo(Facility);

module.exports = {
	db,
	Member,
	Booking,
	Facility,
};
