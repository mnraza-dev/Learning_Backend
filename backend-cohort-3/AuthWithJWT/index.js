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

const ans = signJwt("mnraza@gmail.com", "mnr0za");
console.log(ans);
