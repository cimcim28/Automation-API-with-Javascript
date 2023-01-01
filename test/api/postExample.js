const request = require("supertest");
const baseUrl = require("../../env");

describe("Post request example", () => {
	it("Success create user", async () => {
		const response = rrequest(baseUrl()).post("/user").send({
			id: 0,
			username: "prisma",
			firstName: "depan",
			lastName: "belakang",
			email: "prisma@mail.com",
			password: "283213121",
			phone: "19212839123",
			userStatus: 0,
		});
		console.log((await response).status);
		console.log((await response).body);
	});
});
