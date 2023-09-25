import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "../config/db.js";

dotenv.config();
const port = process.env.PORT || 5050;

connectDB();
const app = express();

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server ready"));

app.listen(port, () => `Server running on port ${port}`);
