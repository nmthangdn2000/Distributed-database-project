import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as orderController from '../controllers/order.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, url: '', action: orderController.getPage });
  route({ method: HttpMethod.GET, url: '/data', action: orderController.getData });
  route({ method: HttpMethod.POST, url: '/add', action: orderController.create });
  route({ method: HttpMethod.GET, url: '/delete/:id', action: orderController.deleteById });
  route({ method: HttpMethod.POST, url: '/update', action: orderController.updateById });

  //   route({ method: HttpMethod.GET, url: '/', action: adminController.index });
};

export default () => addRoot(initRoute);
