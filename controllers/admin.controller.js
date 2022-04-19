import { getAll } from '../models/employees.models';

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
  res.render('admin/signup-signin/login')
}
const register = (req, res, next) => {
  res.render('admin/signup-signin/register')
}
const test = async (req, res, next) => {
  const data = await getAll();
  console.log(data);
  const abc = {
    draw: 1,
    recordsTotal: data.recordset.length,
    recordsFiltered: data.recordset.length,
    data: data.recordset,
  };
  res.json(abc);
};

export { index, profile, chart, table, test, login, register };
