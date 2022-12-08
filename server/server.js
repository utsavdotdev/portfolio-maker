//Importing dependencies
import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import { connectDB } from "./utils/db.js";

//Importing routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import portfolioRoutes from "./routes/portfolio.js";
import tokenRoutes from "./routes/token.js";
import imgUploadRoutes from "./routes/imgUpload.js";

//Making Instances
const app = express();

//Connecting to Database
connectDB();

//MiddleWares
app.use(express.json()); // For JSON data
app.use(cors("*")); // For incoming request

//Api Endpoint
app.get("/", (req, res) => {
  res.json({ msg: "Success✅" });
});

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/token", tokenRoutes);

//Image upload route
app.use("/api/upload", imgUploadRoutes);

//Serving the static files from the uploads folder.
app.use("/uploads", express.static("uploads"));

//Listening to the port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The server is listening on the port ${PORT}`);
});
