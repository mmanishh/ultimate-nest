import { registerAs } from "@nestjs/config";
import Joi from "joi";

export const twilio = registerAs("twilio", () => ({
	accountSid: process.env.TWILIO_ACCOUNT_SID,
	authToken: process.env.TWILIO_AUTH_TOKEN,
	from: process.env.TWILIO_FROM,
}));

export const twilioConfigValidationSchema = {
	TWILIO_ACCOUNT_SID: Joi.string().required(),
	TWILIO_AUTH_TOKEN: Joi.string().required(),
	TWILIO_FROM: Joi.string().required(),
};
