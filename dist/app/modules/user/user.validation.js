"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockUserValidationSchema = exports.updateUserValidationSchema = exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2, { message: "Must be 5 or more characters long" }).max(20, { message: 'Must be 20 or end charactes long' }),
        email: zod_1.z.string().email({ message: "Invalid email address" }),
        password: zod_1.z.string().min(8, { message: "Password must be at least 8 characters long" }),
        role: zod_1.z
            .enum(["admin", "user"], {
            errorMap: () => ({
                message: "Role must be either 'admin' or 'user'",
            }),
        }).default('user'),
        isBlocked: zod_1.z.boolean().default(false)
    })
});
exports.updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2, { message: "Must be 5 or more characters long" }).max(20, { message: 'Must be 20 or end charactes long' }).optional(),
        email: zod_1.z.string().email({ message: "Invalid email address" }).optional(),
        password: zod_1.z.string().min(8, { message: "Password must be at least 8 characters long" }).optional(),
        role: zod_1.z
            .enum(["admin", "user"], {
            errorMap: () => ({
                message: "Role must be either 'admin' or 'user'",
            }),
        }).default('user').optional(),
        isBlocked: zod_1.z.boolean().default(false).optional()
    })
});
exports.blockUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        isBlocked: zod_1.z.boolean().default(false)
    })
});
