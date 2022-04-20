// import authService from '../services/auth.service';
import { RESPONSE } from '../common/constants';
import * as employeeService from '../services/employee.service';
import { getAll } from '../models/employees.models';

const getEmployee = async (req, res) => {
  try {
    const data = await getAll();
    const abc = {
      draw: 1,
      recordsTotal: data.length,
      recordsFiltered: data.length,
      data: data,
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
    res.redirect('/admin/tables');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/tables', { error: 'không thể thêm mới nhân viên' });
  }
};

const deleteById = async (req, res) => {
  try {
    await employeeService.deleteById(req.params.id, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/tables');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/tables', { error: 'không thể thêm mới nhân viên' });
  }
};

const updateById = async (req, res) => {
  try {
    console.log('ákljdlaskjdklajslkdjkl ', req.serverDatabase);
    await employeeService.updateById(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/tables');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/tables', { error: 'không thể thêm mới nhân viên' });
  }
};

export { getEmployee, create, deleteById, updateById };
