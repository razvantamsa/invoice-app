import * as bcrypt from 'bcrypt';

const BcryptUtils = {
  async hashPassword(
    password: string,
    saltRounds: number,
    pepper: string,
  ): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password + pepper, salt);
    return hashedPassword;
  },

  async comparePassword(
    password: string,
    hashedPassword: string,
    pepper: string,
  ): Promise<boolean> {
    const isMatch = await bcrypt.compare(password + pepper, hashedPassword);
    return isMatch;
  },
};

export default BcryptUtils;
