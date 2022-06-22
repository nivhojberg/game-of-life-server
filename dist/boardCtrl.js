"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoard = exports.resetBoard = exports.nextStep = exports.setInitialRandomBoard = exports.setInitialBoard = void 0;
let appBoardState = {
    isInitialized: false
};
const BOARD_SIZE = {
    ROWS: 50,
    COLUMNS: 50
};
const setInitialBoard = (initialBoard) => {
    // TODO decide what should happen when initailzing exisiting board
    // if (board !== null) {
    //     throw new Error("Cannot initialize existing board");
    // }
    appBoardState = {
        isInitialized: true,
        boardDetails: {
            step: 0,
            board: initialBoard
        }
    };
    return { boardState: appBoardState };
};
exports.setInitialBoard = setInitialBoard;
const countAliveNeiboors = (board, row, col) => {
    let counter = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        if (i < 0 || i >= board.length)
            continue;
        for (let j = col - 1; j <= col + 1; j++) {
            if (j < 0 || j >= board[i].length)
                continue;
            if (i === row && j === col)
                continue;
            if (board[i][j] === "alive") {
                counter++;
            }
        }
    }
    return counter;
};
const getCellNextState = (cellState, numOfAliveNeighboors) => {
    if (numOfAliveNeighboors >= 4 || numOfAliveNeighboors <= 1) {
        return "dead";
    }
    if (numOfAliveNeighboors === 3 && cellState === "dead") {
        return "alive";
    }
    return cellState;
};
const getNextStep = (prevBoard) => {
    const nextBoard = [];
    for (let i = 0; i < prevBoard.length; i++) {
        const row = [];
        for (let j = 0; j < prevBoard[i].length; j++) {
            const cellState = prevBoard[i][j];
            const numOfAliveNeighboors = countAliveNeiboors(prevBoard, i, j);
            row.push(getCellNextState(cellState, numOfAliveNeighboors));
        }
        nextBoard.push(row);
    }
    return nextBoard;
};
const nextStep = () => {
    if (!appBoardState.isInitialized) {
        throw new Error("Unable to step before initializing board");
    }
    appBoardState.boardDetails = {
        board: getNextStep(appBoardState.boardDetails.board),
        step: appBoardState.boardDetails.step + 1
    };
    return { boardState: appBoardState };
};
exports.nextStep = nextStep;
const resetBoard = () => {
    appBoardState = {
        isInitialized: false
    };
    return { boardState: appBoardState };
};
exports.resetBoard = resetBoard;
const getBoard = () => {
    return { boardState: appBoardState };
};
exports.getBoard = getBoard;
const getRandomBoard = () => {
    const randomBoard = [];
    for (let i = 0; i < BOARD_SIZE.ROWS; i++) {
        const row = [];
        for (let j = 0; j < BOARD_SIZE.COLUMNS; j++) {
            row.push(Math.random() < 0.5 ? "alive" : "dead");
        }
        randomBoard.push(row);
    }
    return randomBoard;
};
const setInitialRandomBoard = () => {
    return setInitialBoard(getRandomBoard());
};
exports.setInitialRandomBoard = setInitialRandomBoard;
//# sourceMappingURL=boardCtrl.js.map