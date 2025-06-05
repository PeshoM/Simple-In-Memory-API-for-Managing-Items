import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port: string = process.env.PORT || "8000";

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(port, () => {
  console.log("server is on", port);
});
