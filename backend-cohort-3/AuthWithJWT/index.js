import jwt from "jsonwebtoken";
import z from "zod";

const jwtSecret = "secret";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    jwtSecret
  );
  return signature;
}

function verifyJwt(token) {
  const verified = jwt.verify(token, jwtSecret);
  if (verified) {
    return true;
  } else {
    return false;
  }
}
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

const ans = signJwt("mnraza@gmail.com", "mnr0za");
console.log("here is the token genrated: ", ans);

const myToken = ans;
console.log("Decoded is - ",decodeJwt(myToken));

const verifiedT = verifyJwt(ans);
console.log("Is this verified - ", verifiedT);
