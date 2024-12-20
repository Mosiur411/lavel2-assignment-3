import { AuthService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status'

const userCreaetAccount = catchAsync(async (req, res) => {
    const data = req.body;
    if (!data) throw new Error("Invalid Body Information")
    const result = await AuthService.createUserIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "create user success",
        data: result
    })

})

const userLogin = catchAsync(async (req, res) => {
    const data = req.body;
    if (!data) throw new Error("Invalid Body Information")
    const result = await AuthService.loginUserIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Login successful",
        data: { token: result }
    })
})
export const authController = { userCreaetAccount, userLogin }