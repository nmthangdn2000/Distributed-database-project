import authRouter from '../router/auth.router';
import adminRouter from '../router/admin.router';
import employeeRouter from '../router/employee.router';
import productRouter from '../router/product.router';
import orderRouter from '../router/order.router';

const initRouter = (app) => {
  app.use('/api', authRouter());
  app.use('/admin', adminRouter());
  app.use('/admin/table/employee', employeeRouter());
  app.use('/admin/table/product', productRouter());
  app.use('/admin/table/order', orderRouter());
};

export default initRouter;
