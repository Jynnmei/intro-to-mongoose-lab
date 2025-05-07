import express from "express";

import {
  deleteCustomer,
  getCustomer,
  patchCustomer,
  postCustomer,
  putCustomer,
} from "../controllers/customer.js";
import { checkCustomerInput, validateInParam } from "../validators/customer.js";
import { checkErrors } from "../validators/checkError.js";

const router = express.Router();

router.get("/customer", getCustomer);

router.post("/customer", postCustomer);

router.put("/customer", checkCustomerInput, checkErrors, putCustomer);

router.delete("/customer/:id", validateInParam, checkErrors, deleteCustomer);

router.patch("/customer/:id", patchCustomer);

export default router;
