import express from "express";
const router = express.Router();
import { getFinancials, addFinancials } from "../models/financials.js";

//Route to GET all entries in financials table
router.get("/", async function (req, res) {
  const result = await getFinancials();
  console.log(result.rows);
  res.status(200).json({ success: true, payload: result.rows });
});

//Route to ADD an entry to financials table
router.post("/", async function (req, res) {
  const postBody = req.body;
  console.log(postBody);
  const result = await addFinancials(postBody);
  console.log("posted data:", result.rows);
  res.status(200).json({ success: true, payload: result.rows });
});

export default router;
