import express from "express";
import cors from "cors";

const app = express();
const port: string = "8000";

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(port, () => {
  console.log("server is on", port);
});
