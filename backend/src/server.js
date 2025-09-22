import express from "express";
import cors from "cors";
import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for your frontend
app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

// Connect to DB, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on port:", PORT);
  });
}).catch(err => {
  console.error("Failed to connect to DB", err);
});
