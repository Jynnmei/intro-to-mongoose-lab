import Customer from "../models/customer.js";

// view all customer = GET(read)
export const getCustomer = async (req, res) => {
  const allCustomer = await Customer.find(); // 从 MongoDB 获取所有数据
  res.json(allCustomer); // 返回 JSON 数据到 Postman
};

// view 1 customer = GET(read)
export const findOneCustomerId = async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  res.json(customer);
};

// create = POST
export const postCustomer = async (req, res) => {
  const newCustomer = new Customer({
    name: req.body.name,
    age: req.body.age,
  });
  await newCustomer.save();

  res.json({ status: "ok", msg: "saved" });
};

// delete = DELETE
export const deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);

  res.json({ status: "ok", msg: "customer deleted" });
};

// update = PATCH
export const patchCustomer = async (req, res) => {
  const respone = await Customer.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    age: req.body.age,
  });

  console.log(respone);

  res.json({ status: "ok", msg: "customer updated" });
};
