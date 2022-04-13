import 'dotenv/config.js';
import * as database from './start/database';
import * as server from './start/server';

(async () => {
  try {
    server.start();
    // await database.connect();
  } catch (error) {
    console.log(`Cannot start server. Error: ${e}`);
  }
})();
