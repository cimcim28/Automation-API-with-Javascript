const { expect } = require("chai");
const request = require("supertest");
const baseUrl = require("../../env");
const DATA = require("../../data/userData.js");

describe("Post Request Example", () => {
	const response = request(baseUrl()).post("/user").send(DATA.CREATE_USER_DATA);
	// 	id: 0,
	// 	username: "prisma",
	// 	firstName: "depan",
	// 	lastName: "belakang",
	// 	email: "prisma@mail.com",
	// 	password: "283213121",
	// 	phone: "19212839123",
	// 	userStatus: 0,
	// });

	it("response status equal to 200", async () => {
		//check response tatus harus sama dengan 200
		expect((await response).status).to.equal(200);
	});

	it("response body to haveOwnProperty", async () => {
		//expect dalam body response terdapat value 'message'
		expect((await response).body).to.haveOwnProperty("message");
	});

	//reporting in mochawesome
});
