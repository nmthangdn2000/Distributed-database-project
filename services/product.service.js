// import authService from '../services/auth.service';
import { ERROR, SERVERNAME } from '../common/constants';
import * as ProductModel from '../models/product.model';
import * as database from '../start/database';

const create = async (data, serverDatabase) => {
  await database.connect(SERVERNAME.MAIN);
  const data2 = await ProductModel.getLastRecord();
  data.id = `PD${Number(data2[0].PRODUCT_ID.split('PD')[1].trim()) + 1}`;
  await database.connect(serverDatabase);
  const myData = await ProductModel.create(data);
  if (!myData) throw new Error(ERROR.CanNotCreateUser);
};

const deleteById = async (id, serverDatabase) => {
  await database.connect(serverDatabase);
  await ProductModel.deleteById(id);
};

const updateById = async (data, serverDatabase) => {
  await database.connect(serverDatabase);
  await ProductModel.updatebyId(data);
};

export { create, deleteById, updateById };
