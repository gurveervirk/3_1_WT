import connectToMongo from "./db.js";
import express from "express";
import cors from "cors";
import router from "./routes/crud.js";
const app = express();
const port = 5000;
connectToMongo();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/crud', router);
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
