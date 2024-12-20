import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogService } from "./blog.service";



const blogCreate = catchAsync(async (req, res) => {
    const data = req.body;
    const user = req.user
    if (!data) throw new Error("Invalid Body Information")
    const result = await BlogService.createBlogIntoDB(data, user)

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    })

})
const getCreate = catchAsync(async (req, res) => {
    const data = req.body;
    const user = req.user
    if (!data) throw new Error("Invalid Body Information")
    const result = await BlogService.createBlogIntoDB(data, user)

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    })

})
const blogUpdate = catchAsync(async (req, res) => {
    const data = req.body;
    const { Id } = req.params;
    if (!data || !Id) throw new Error("Invalid Body Information")
    const result = await BlogService.updateBlogIntoDB(data, Id)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    })

})
const blogDelete = catchAsync(async (req, res) => {
    const { Id } = req.params;
    if (!Id) throw new Error("Invalid Body Information")
    const result = await BlogService.deleteBlogIntoDB(Id)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result
    })

})

export const blogController = { blogCreate, blogUpdate, blogDelete,getCreate }