// import authService from '../services/auth.service';
import { ERROR, SERVERNAME } from '../common/constants';
import * as OrderModel from '../models/order.model';
import * as database from '../start/database';

const create = async (data, serverDatabase) => {
  await database.connect(SERVERNAME.MAIN);
  const data2 = await OrderModel.getLastRecord();
  data.id = `OD${Number(data2[0].PRODUCT_ID.split('OD')[1].trim()) + 1}`;
  await database.connect(serverDatabase);
  const myData = await OrderModel.create(data);
  if (!myData) throw new Error(ERROR.CanNotCreateUser);
};

const deleteById = async (id, serverDatabase) => {
  await database.connect(serverDatabase);
  await OrderModel.deleteById(id);
};

const updateById = async (data, serverDatabase) => {
  await database.connect(serverDatabase);
  await OrderModel.updatebyId(data);
};

export { create, deleteById, updateById };
