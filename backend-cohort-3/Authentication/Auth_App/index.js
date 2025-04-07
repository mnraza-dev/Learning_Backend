import jwt from "jsonwebtoken";

const user = {
  name: "mnraza",
};
const token = jwt.sign(user, "1234");

const verified = jwt.verify(token, "1234");

console.log(token);
console.log(verified.name);
