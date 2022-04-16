'use strict';

import { ERROR } from '../common/constants';
import PasswordHash from '../common/hashPassword';
import jwt from 'jsonwebtoken';
import appConfig from '../configs/appConfig';

class AuthService {
  async login(phone, password, serverDatabase) {
    const query = {
      phone,
      password: PasswordHash.sha512(password),
    };
    // const { _id, name, ...data } = user;
    const token = endCodeToken({ phone: query.phone, serverDatabase });
    return { phone: query.phone, token };
  }

  async register(data) {
    let { password, ...objectUser } = data;
    password = PasswordHash.sha512(password);
    const newUser = new User({
      ...objectUser,
      password,
    });
    const user = await newUser.save();
    if (!user) throw new Error(ERROR.CanNotCreateUser);
  }
}

export default new AuthService();

function endCodeToken(data) {
  return jwt.sign(data, appConfig.KEY_SECRET_JWT, { expiresIn: '30d' });
}
