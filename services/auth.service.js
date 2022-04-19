'use strict';

import { ERROR } from '../common/constants';
import PasswordHash from '../common/hashPassword';
import jwt from 'jsonwebtoken';
import appConfig from '../configs/appConfig';
import * as EmployeeModel from '../models/employees.models';
import * as database from '../start/database';
class AuthService {
  async login({ username, password, serverDatabase }) {
    // const query = {
    //   phone,
    //   password: PasswordHash.sha512(password),
    // };
    await database.connect(serverDatabase);
    const employee = await EmployeeModel.getOne(`USERNAME = '${username}' AND PASSWORD = '${password}'`);
    if (!employee) throw Error(ERROR.AccountDoesNotExist);
    const { EMPLOYEE_ID, NAME, USERNAME, ...data } = employee;
    const token = endCodeToken({ EMPLOYEE_ID, NAME, USERNAME, serverDatabase });
    return { employee, token };
  }

  async register(data) {
    await database.connect('DESKTOP-LIKSEB9');
    const data2 = await EmployeeModel.getLastRecord();
    data.id = `NV${Number(data2[0].EMPLOYEE_ID.split('NV')[1].trim()) + 1}`;
    const myData = await EmployeeModel.create(data);
    if (!myData) throw new Error(ERROR.CanNotCreateUser);
  }
}

export default new AuthService();

function endCodeToken(data) {
  return jwt.sign(data, appConfig.KEY_SECRET_JWT, { expiresIn: '30d' });
}
