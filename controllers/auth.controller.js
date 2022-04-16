// import authService from '../services/auth.service';
import { RESPONSE } from '../common/constants';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';
import authService from '../services/auth.service';
import * as database from '../start/database';

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, serverDatabase } = req.body;
    const data = await authService.login(username, password, serverDatabase);
    // database.connect(req.body.serverDatabase);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error.message);
    responseError(res, error.message);
  }
};

const register = async (req, res) => {
  res.send('register');
};

export { login, register };
