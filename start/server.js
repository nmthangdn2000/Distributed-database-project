import express from 'express';
import logger from 'morgan';
import appConfig from '../configs/appConfig';
import routerConfig from '../configs/routerConfig';
import path from 'path';
import cookieParser from 'cookie-parser';
import { SERVERNAME } from '../common/constants';

const app = express();
const __dirname = path.resolve();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const middleware = [
  logger('dev'), // common, dev,
  express.urlencoded({ extended: true }),
  express.json(),
  express.static(path.join(__dirname, 'public')),
  cookieParser('hello'),
];

const initStatic = () => {
  Array.from(middleware).forEach((m) => {
    app.use(m);
  });
  app.get('/check-server', (req, res) => res.json(res.app.locals.serverDatabaseAdmin));
};

const initApiRouters = () => {
  routerConfig(app);
};

const start = () => {
  initStatic();
  initApiRouters();
  app.locals.serverDatabaseAdmin = SERVERNAME.MAIN;
  app.listen(appConfig.env.port, () => console.log(`Server started on port: ${appConfig.env.port}`));
};

export { start };
