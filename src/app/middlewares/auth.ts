import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import config from "../config";
import AppError from "../error/AppError";
import catchAsync from "../utils/catchAsync";

const JWT_SECRET = config.jwtSecret as string;

const authUser = catchAsync(async (req, res, next) => {
    const authHeader = req.headers.authorization as string;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Access denied. No token provided or invalid format.");
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = decoded
    next()
})
const onlyAdmin = catchAsync(async (req, res, next) => {
    const user = req.user;
    if (!user || !user.role) {
        throw new Error("Access denied. No token provided or invalid format.");
    }
    if (user.role !== "admin") {
        throw new Error("Access denied only admin");
    }
    next();
})
export const auth = { authUser, onlyAdmin };