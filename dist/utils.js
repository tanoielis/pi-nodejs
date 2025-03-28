"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAxiosClient = void 0;
var axios_1 = __importDefault(require("axios"));
var getAxiosClient = function (apiKey, options) {
    var axiosClient = axios_1.default.create({
        baseURL: (options === null || options === void 0 ? void 0 : options.baseUrl) || "https://api.minepi.com",
        timeout: 20000,
        headers: { Authorization: "Key ".concat(apiKey), "Content-Type": "application/json" },
        adapter: options === null || options === void 0 ? void 0 : options.adapter
    });
    return axiosClient;
};
exports.getAxiosClient = getAxiosClient;
