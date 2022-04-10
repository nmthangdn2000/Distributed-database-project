import sql from 'mssql';
import { SERVERNAME } from '../common/constants';
import { getAll } from '../models/employees.models';

let pool = null;

const configSql = {
  server: SERVERNAME.MAIN,
  user: 'sa',
  password: '123456',
  database: 'SHOP_DT',
  options: {
    trustServerCertificate: true,
  },
};

const connect = async () => {
  pool = new sql.ConnectionPool(configSql);
  await pool.connect(async (err) => {
    if (err) console.log(`Can not connect databse: ${err}`);
    else console.log(`Connect databse success`);
  });
};

export { configSql, connect, pool };
