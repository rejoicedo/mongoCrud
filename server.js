import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import taskRoute from "./server/routes/router.js";

import connectDB from "./server/db/connection.js";

// Solved "__dirname is not defined in ES module scope" - Line 9-11
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

dotenv.config({path:'config.env'});
const port = process.env.PORT || 4500;

// Log requests
app.use(morgan('tiny'));

// mongoDB Connection
connectDB();

// parse requests to body-parser
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(cors());

// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Load Routers
app.use("/", taskRoute);
app.all("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


