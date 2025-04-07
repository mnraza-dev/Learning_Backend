import jwt from "jsonwebtoken";

const value = {
  name: "John Doe",
  accountNumber: "123456789",
  balance: 1000,
};

const token = jwt.sign(value, "secret");
console.log(token);
