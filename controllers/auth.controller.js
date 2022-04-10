// import authService from '../services/auth.service';
import { RESPONSE } from '../common/constants';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';
import * as database from '../start/database';

const login = async (req, res) => {
  try {
    database.configSql.server = req.body.server;
    database.connect();

    res.send('login ok');
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res) => {
  res.send('register');
};

export { login, register };
