import express from "express";
import cors from "cors";
import router from './router';

const app = express();
const API_URL = "http://localhost";
const PORT = 3000;

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus:200
};

app.use(cors(corsOptions));
app.use((req, _res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use(router);

app.listen(PORT, () => {
    console.log(`app listening on ${API_URL}:${PORT}`);
});
