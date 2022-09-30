const { db, Member, Booking, Facility } = require("./db");

const seedDb = async () => {
	await db.sync({ force: true, logging: false });

	await Member.create({
		name: "Moe",
		sponsorId: Lucy.id,
	});
	await Member.create({
		name: "Lucy",
	});
	await Member.create({
		name: "Ethyl",
		sponsorId: Moe.id,
	});
	await Member.create({
		name: "Larry",
		sponsorId: Lucy.id,
	});

	await Facility.create({
		name: "tennis",
	});
	await Facility.create({
		name: "ping pong",
	});
	await Facility.create({
		name: "marbles",
	});

	await Booking.create({
		memberId,
		facilityId,
		// memberId: Lucy.id,
		// bookingId: marbles.id,
	});
};

seedDb();

//module.exports = { db, Booking, Member, Facility };
