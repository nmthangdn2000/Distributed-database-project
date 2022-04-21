import { SERVERNAME } from '../common/constants';
import { getAll } from '../models/employees.models';
import authService from '../services/auth.service';

const index = (req, res, next) => {
  res.render('admin/index');
};
const profile = (req, res, next) => {
  res.render('admin/profile');
};
const chart = (req, res, next) => {
  res.render('admin/chart');
};
const table = (req, res, next) => {
  res.render('admin/tables');
};
const login = (req, res, next) => {
  res.render('admin/signup-signin/login');
};
const postLogin = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.app.locals.serverDatabaseAdmin = req.body.serverDatabase;

    res.cookie('token', data.token, { signed: true });
    res.redirect('/admin');
  } catch (error) {
    console.log(error.message);
    res.render('admin/signup-signin/login', { error: 'Tài khoản hoặc mật khẩu không đúng' });
  }
};
const register = (req, res, next) => {
  res.render('admin/signup-signin/register');
};

const logout = (req, res, next) => {
  console.log('logout');
  res.clearCookie('token');
  res.redirect('/admin/login');
};

const test = async (req, res, next) => {
  const data = await getAll();
  console.log(data);
  const abc = {
    draw: 1,
    recordsTotal: data.length,
    recordsFiltered: data.length,
    data: data,
  };
  res.json(abc);
};

const changeServerDatabase = (req, res) => {
  res.app.locals.serverDatabaseAdmin = SERVERNAME[req.params.serverDatatbase];
  res.redirect(req.query.path);
};

export { index, profile, chart, table, test, login, register, postLogin, logout, changeServerDatabase };
