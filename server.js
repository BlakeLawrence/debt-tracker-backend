import express from "express";
const app = express();
import cors from "cors";

import financialsRouter from "./routes/financials.js";

const port = 5000;
app.use(express.json());
app.use(cors());
app.use("/api/v1/financials", financialsRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
