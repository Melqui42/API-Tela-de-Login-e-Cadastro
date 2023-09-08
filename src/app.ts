import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import router from "./routers/index";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);

export default app;
