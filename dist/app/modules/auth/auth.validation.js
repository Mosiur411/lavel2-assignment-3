"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAuthValidationSchema = void 0;
const zod_1 = require("zod");
exports.LoginAuthValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email({ message: "Invalid email address" }),
        password: zod_1.z.string().min(8, { message: "Password must be at least 8 characters long" })
    })
});
