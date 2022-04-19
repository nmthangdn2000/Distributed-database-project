import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as adminController from '../controllers/admin.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, url: '/', action: adminController.index, middelware: [] });
  route({ method: HttpMethod.GET, url: '/dashboard', action: adminController.index, middelware: [] });
  route({ method: HttpMethod.GET, url: '/profile', action: adminController.profile, middelware: [] });
  route({ method: HttpMethod.GET, url: '/chart', action: adminController.chart, middelware: [] });
  route({ method: HttpMethod.GET, url: '/tables', action: adminController.table, middelware: [] });
  route({ method: HttpMethod.GET, url: '/login', action: adminController.login, middelware: [] });
  route({ method: HttpMethod.GET, url: '/register', action: adminController.register, middelware: [] });
  // route({ method: HttpMethod.POST, url: '/refresh-token', action: authController.register, middelware: [] });
};

export default addRoot(initRoute);
