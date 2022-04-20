import { pool } from '../start/database';

const getAll = async () => {
  const queryString = `SELECT * FROM EMPLOYEE`;
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log('can not get all data employee ', error);
    return null;
  }
};

const getById = async (id) => {
  const queryString = `SELECT * FROM EMPLOYEE WHERE EMPLOYEE_ID = '${id}'`;
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log('can not get data employee ', error);
    return null;
  }
};

const getOne = async (where) => {
  const queryString = `SELECT * FROM EMPLOYEE WHERE ${where}`;
  console.log(queryString);
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log('can not get data employee ', error);
    return null;
  }
};

const create = async ({ id, name, branch_id, username, password }) => {
  const queryString = `INSERT INTO EMPLOYEE(EMPLOYEE_ID,NAME,BRANCH_ID, USERNAME, PASSWORD) VALUES('${id}',N'${name}', '${branch_id}', '${username}','${password}')`;
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log('can not create data employee ', error);
    return null;
  }
};

const deleteById = async (id) => {
  const queryString = `DELETE EMPLOYEE WHERE EMPLOYEE_ID = '${id}'`;
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log('can not delete data employee ', error);
    return null;
  }
};

const updatebyId = async ({ id, name, branch_id, username }) => {
  const queryString = `UPDATE EMPLOYEE SET NAME = N'${name}', BRANCH_ID = '${branch_id}', USERNAME = '${username}' WHERE EMPLOYEE_ID = '${id}'`;
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log('can not update data employee ', error);
    return null;
  }
};

const getLastRecord = async () => {
  const queryString = `SELECT TOP 1 * FROM EMPLOYEE ORDER BY EMPLOYEE_ID DESC`;
  try {
    const data = await pool.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log('can not update data employee ', error);
    return null;
  }
};

export { getAll, getById, create, deleteById, updatebyId, getOne, getLastRecord };
