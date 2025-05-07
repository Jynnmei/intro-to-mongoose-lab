import { body, param } from "express-validator";

export const checkCustomerInput = [
  body("name", "name is required").not().isEmpty(),
  body("age", "age is requited").notEmpty(),
  body("age", "age must be a number").isInt(),
];

export const validateInParam = [param("id", "id is valid").isMongoId()];
