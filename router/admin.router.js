import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as adminController from '../controllers/admin.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, url: '/test', action: adminController.test });

  route({ method: HttpMethod.GET, url: '/', action: adminController.index });
  route({ method: HttpMethod.GET, url: '/dashboard', action: adminController.index });
  route({ method: HttpMethod.GET, url: '/profile', action: adminController.profile });
  route({ method: HttpMethod.GET, url: '/chart', action: adminController.chart });
  route({ method: HttpMethod.GET, url: '/tables', action: adminController.table });
  route({ method: HttpMethod.GET, url: '/login', action: adminController.login, middelware: [] });
  route({ method: HttpMethod.GET, url: '/register', action: adminController.register, middelware: [] });
  route({ method: HttpMethod.GET, url: '/logout', action: adminController.logout, middelware: [] });
  // route({ method: HttpMethod.POST, url: '/refresh-token', action: authController.register, middelware: [] });changeServerDatabase
  route({ method: HttpMethod.POST, url: '/login', action: adminController.postLogin, middelware: [] });
  route({
    method: HttpMethod.GET,
    url: '/change-server/:serverDatatbase',
    action: adminController.changeServerDatabase,
    middelware: [],
  });
};

export default () => addRoot(initRoute);
