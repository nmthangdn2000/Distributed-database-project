import { pool } from '../start/database';

const getAll = async () => {
  const queryString = 'SELECT * FROM EMPLOYEE';
  try {
    const data = await pool.request().query(queryString);
    return data;
  } catch (error) {
    console.log('can not get data employee ', error);
    return null;
  }
};

export { getAll };
