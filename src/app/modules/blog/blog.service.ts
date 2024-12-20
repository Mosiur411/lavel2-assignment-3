import AppError from "../../error/AppError"
import httpStatus from 'http-status'
import { TBlog } from "./blog.interface"
import { BlogModel } from "./blog.model"
import { JwtPayload } from "jsonwebtoken"

const createBlogIntoDB = async (payload: TBlog, user: JwtPayload) => {
    const userData = user._doc;
    payload.author = userData?._id;
    const result = await BlogModel.create(payload)
    if (!result) throw new AppError(httpStatus.NOT_FOUND, "Invalid User Infomation")
    return result;
}

const updateBlogIntoDB = async (payload: Partial<TBlog>, Id: string) => {
    const result = await BlogModel.findOneAndUpdate({ _id: Id }, payload, { new: true });
    if (!result) throw new AppError(httpStatus.NOT_FOUND, "Invalid User Infomation")
    return result;
}

const deleteBlogIntoDB = async (Id: string) => {
    const result = await BlogModel.deleteOne({ _id: Id });
    if (!result) throw new AppError(httpStatus.NOT_FOUND, "Invalid Delete Infomation")
    return result;
}


export const BlogService = {
    createBlogIntoDB,
    updateBlogIntoDB,
    deleteBlogIntoDB
}