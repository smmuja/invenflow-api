import bcrypt from "bcryptjs";

const examplePassword = "admin123";

const salt = bcrypt.genSaltSync(10);

const hashedPassword = bcrypt.hashSync(examplePassword, salt);

const isMatch = bcrypt.compareSync(examplePassword, hashedPassword);

console.log(examplePassword, { hashedPassword, isMatch });
