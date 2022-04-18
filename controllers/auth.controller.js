// import authService from '../services/auth.service';
import { RESPONSE } from '../common/constants';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';
import authService from '../services/auth.service';
import * as database from '../start/database';

const login = async (req, res) => {
  try {
    console.log(req.body);
    const data = await authService.login(req.body);
    // database.connect(req.body.serverDatabase);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error.message);
    responseError(res, error.message);
  }
};

const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    // database.connect(req.body.serverDatabase);
    responseSuccessWithData(res, RESPONSE.REGISTER_SUCCESS);
  } catch (error) {
    console.log(error.message);
    responseError(res, error.message);
  }
};

export { login, register };
