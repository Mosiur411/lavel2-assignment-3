import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";
;


const userUpdate = catchAsync(async (req, res) => {
    const data = req.body;
    const { Id } = req.params;
    if (!data || !Id) throw new Error("Invalid Body Information")
    const result = await UserService.updateUserIntoDB(data, Id)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    })

})

export const userController = {userUpdate }