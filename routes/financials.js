import express from "express";
const router = express.Router();
import { getFinancials } from "../models/financials.js";

//Route to GET all entries in start a clean table
router.get("/", async function (req, res) {
  const result = await getFinancials();
  console.log(result.rows);
  res.status(200).json({ success: true, payload: result.rows });
});

export default router;
