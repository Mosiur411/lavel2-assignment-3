"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// parserrs
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// root
app.get("/", (req, res) => {
    res.send("Hello Server");
});
// all router
app.use('/api', routes_1.default);
// global error handel 
app.use(globalErrorHandler_1.default);
// not found page
app.use(notFound_1.default);
exports.default = app;
/*
https://github.com/Apollo-Level2-Web-Dev/b4-assignment-3

*/ 
