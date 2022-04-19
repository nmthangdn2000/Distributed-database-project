import authRouter from '../router/auth.router';
import adminRouter from '../router/admin.router';
import employeeRouter from '../router/employee.router';

const initRouter = (app) => {
  app.use('/api', authRouter());
  app.use('/admin', adminRouter());
  app.use('/admin/table/employee', employeeRouter());
};

export default initRouter;
