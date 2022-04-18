import sql from 'mssql';
import { SERVERNAME } from '../common/constants';
import { getAll } from '../models/employees.models';

let pool = null;

const configSql = {
  server: SERVERNAME.MAIN,
  user: 'sa',
  password: '123456',
  database: 'SHOP_DT2',
  options: {
    trustServerCertificate: true,
  },
};

const connect = async (server) => {
  console.log('server ', server);
  configSql.server = server;
  pool = new sql.ConnectionPool(configSql);
  try {
    await pool.connect();
    return pool;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { connect, pool };
