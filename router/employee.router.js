import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as adminController from '../controllers/employee.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, url: '', action: adminController.getEmployee });
  route({ method: HttpMethod.POST, url: '/add', action: adminController.create });
  route({ method: HttpMethod.GET, url: '/delete/:id', action: adminController.deleteById });

  //   route({ method: HttpMethod.GET, url: '/', action: adminController.index });
};

export default () => addRoot(initRoute);
