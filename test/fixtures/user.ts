import { Roles } from "@common/types";
import { faker } from "@mikro-orm/seeder";

export const user: Record<string, { email: string; password: string }> = {
	admin: {
		email: "roobin.bhandari@gmail.com",
		password: process.env.USER_PASSWORD,
	},
	user: {
		email: "user@gmail.com",
		password: process.env.USER_PASSWORD,
	},
	NonExistentUser: {
		email: "unknown@someone.com",
		password: process.env.USER_PASSWORD,
	},
};

export const userDto = {
	firstName: faker.name.firstName(),
	lastName: faker.name.firstName(),
	email: faker.internet.email(),
	username: "username",
	roles: [Roles.AUTHOR],
	password: process.env.USER_PASSWORD,
};
