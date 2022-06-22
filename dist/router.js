"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const boardCtrl_1 = require("./boardCtrl");
const router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
router.get("/", (_req, res) => {
    res.json((0, boardCtrl_1.getBoard)());
});
router.post("/init", jsonParser, (req, res) => {
    var _a, _b;
    if (((_b = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.initialState) !== null && _b !== void 0 ? _b : undefined) === undefined) {
        throw new Error("Invalid body");
    }
    res.json((0, boardCtrl_1.setInitialBoard)(req.body.initialState));
});
router.get("/next", (_req, res) => {
    res.json((0, boardCtrl_1.nextStep)());
});
router.get("/reset", (_req, res) => {
    res.json((0, boardCtrl_1.resetBoard)());
});
router.get("/random", (_req, res) => {
    res.json((0, boardCtrl_1.setInitialRandomBoard)());
});
exports.default = router;
//# sourceMappingURL=router.js.map