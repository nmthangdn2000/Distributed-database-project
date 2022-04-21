import { pool } from '../start/database';

const DATABASE_NAME = 'PRODUCT';

const getAll = async () => {
  const queryString = `SELECT * FROM ${DATABASE_NAME}`;
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log(`can not get all data ${DATABASE_NAME}  `, error);
    return null;
  }
};

const getById = async (id) => {
  const queryString = `SELECT * FROM ${DATABASE_NAME} WHERE ${DATABASE_NAME}_ID = '${id}'`;
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log(`can not get data ${DATABASE_NAME}  `, error);
    return null;
  }
};

const getOne = async (where) => {
  const queryString = `SELECT * FROM ${DATABASE_NAME} WHERE ${where}`;
  console.log(queryString);
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log(`can not get data ${DATABASE_NAME}  `, error);
    return null;
  }
};

const create = async ({ id, name, import_rice, price, warehouse_id }) => {
  const queryString = `INSERT INTO ${DATABASE_NAME} (${DATABASE_NAME}_ID,NAME,IMPORT_PRICE, PRICE, WAREHOUSE_ID) VALUES('${id}',N'${name}', '${import_rice}', '${price}','${warehouse_id}')`;
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log(`can not create data ${DATABASE_NAME}  `, error);
    return null;
  }
};

const deleteById = async (id) => {
  const queryString = `DELETE ${DATABASE_NAME} WHERE ${DATABASE_NAME}_ID = '${id}'`;
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log(`can not delete data ${DATABASE_NAME} `, error);
    return null;
  }
};

const updatebyId = async ({ id, name, import_rice, price, warehouse_id }) => {
  const queryString = `UPDATE ${DATABASE_NAME} SET NAME = N'${name}', IMPORT_PRICE = '${import_rice}', PRICE = '${price}', WAREHOUSE_ID = '${warehouse_id}' WHERE ${DATABASE_NAME}_ID = '${id}'`;
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log(`can not update data ${DATABASE_NAME}  `, error);
    return null;
  }
};

const getLastRecord = async () => {
  const queryString = `SELECT TOP 1 * FROM ${DATABASE_NAME} ORDER BY ${DATABASE_NAME}_ID DESC`;
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log(`can not update data ${DATABASE_NAME}  `, error);
    return null;
  }
};

export { getAll, getById, create, deleteById, updatebyId, getOne, getLastRecord };
