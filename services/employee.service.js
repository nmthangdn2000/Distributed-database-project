// import authService from '../services/auth.service';
import { ERROR } from '../common/constants';
import * as EmployeeModel from '../models/employees.models';
import * as database from '../start/database';

const create = async (data, serverDatabase) => {
  await database.connect(serverDatabase);
  const data2 = await EmployeeModel.getLastRecord();
  data.id = `NV${Number(data2[0].EMPLOYEE_ID.split('NV')[1].trim()) + 1}`;
  const myData = await EmployeeModel.create(data);
  if (!myData) throw new Error(ERROR.CanNotCreateUser);
};

const deleteById = async (id, serverDatabase) => {
  await database.connect(serverDatabase);
  await EmployeeModel.deleteById(id);
};

const updateById = async (data, serverDatabase) => {
  await database.connect(serverDatabase);
  await EmployeeModel.updatebyId(data);
};

export { create, deleteById, updateById };
