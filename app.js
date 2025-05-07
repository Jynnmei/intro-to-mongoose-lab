import dotenv from "dotenv";
dotenv.config();

import express from "express";
import customerRoutes from "./src/routers/customer.js";
import connectDB from "./src/db/db.js";

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", customerRoutes);

app.listen(process.env.PORT);
