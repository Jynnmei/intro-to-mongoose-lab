import express from "express";

import {
  deleteCustomer,
  findOneCustomerId,
  getCustomer,
  patchCustomer,
  postCustomer,
} from "../controllers/customer.js";
import { checkCustomerInput, validateInParam } from "../validators/customer.js";
import { checkErrors } from "../validators/checkError.js";

const router = express.Router();

router.get("/customer", getCustomer);

router.get("/customer/:id", findOneCustomerId);

router.post("/customer", checkCustomerInput, checkErrors, postCustomer);

router.delete("/customer/:id", validateInParam, checkErrors, deleteCustomer);

router.patch("/customer/:id", patchCustomer);

export default router;
