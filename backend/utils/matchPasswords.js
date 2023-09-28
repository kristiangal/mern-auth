import bcrypt from "bcryptjs";

const matchPasswords = async (user, password) => {
  return await bcrypt.compare(password, user.password);
};

export default matchPasswords;
