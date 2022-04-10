import { pool } from '../start/database';

const getAll = async () => {
  const queryString = 'SELECT * FROM BRANCH';
  return await pool
    .request()
    .query(queryString)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export { getAll };
