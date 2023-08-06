import express from "express";
const app = express();

import financialsRouter from "./routes/financials.js";

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/v1/financials", financialsRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
