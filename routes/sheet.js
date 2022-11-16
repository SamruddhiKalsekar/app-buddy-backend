import express from "express";
const router = express.Router();

import {
  createSheet,
  getCompanyList,
  insertCompany,
  insertOAData,
} from "../controllers/sheet.js";

router.post("/", createSheet);
// router.get("/getAllData", getAllData)
router.get("/getCompanyList", getCompanyList);
router.post("/insertCompany", insertCompany);
router.post("/insertOAData", insertOAData);

export default router;
