import express from "express";
import bodyParser from 'body-parser';
import {
    setInitialBoard,
    nextStep,
    resetBoard,
    getBoard,
    setInitialRandomBoard
} from './boardCtrl';

const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/", (_req, res) => {
    res.json(getBoard());
});

router.post("/init", jsonParser, (req, res) => {
    if ((req?.body?.initialState ?? undefined) === undefined) {
        throw new Error("Invalid body");
    }
    res.json(setInitialBoard(req.body.initialState));
});

router.get("/next", (_req, res) => {
    res.json(nextStep());
});

router.get("/reset", (_req, res) => {
    res.json(resetBoard());
});

router.get("/random", (_req, res) => {
    res.json(setInitialRandomBoard());
})

export default router;
