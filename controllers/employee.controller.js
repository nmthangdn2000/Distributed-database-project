import { sortData } from '../services/base.service';
import { RESPONSE } from '../common/constants';
import * as employeeService from '../services/employee.service';
import { getAll } from '../models/employees.models';

const getPage = async (req, res) => {
  console.log('aa');
  res.render('admin/employee-tables');
};

const getData = async (req, res) => {
  try {
    const data = await getAll();
    console.log(sortData(data));
    const abc = {
      draw: 1,
      recordsTotal: data.length,
      recordsFiltered: data.length,
      data: sortData(data),
    };
    res.json(abc);
  } catch (error) {
    console.log(error.message);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    await employeeService.create(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/employee');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/employee', { error: 'không thể thêm mới nhân viên' });
  }
};

const deleteById = async (req, res) => {
  try {
    await employeeService.deleteById(req.params.id, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/employee');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/employee', { error: 'không thể thêm mới nhân viên' });
  }
};

const updateById = async (req, res) => {
  try {
    await employeeService.updateById(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/employee');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/employee', { error: 'không thể thêm mới nhân viên' });
  }
};

export { getData, create, deleteById, updateById, getPage };
