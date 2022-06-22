"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const API_URL = "http://localhost";
const PORT = 3000;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use((req, _res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`app listening on ${API_URL}:${PORT}`);
});
//# sourceMappingURL=server.js.map