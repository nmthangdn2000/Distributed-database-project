import authRouter from '../router/auth.router';
import adminRouter from '../router/admin.router';

const initRouter = (app) => {
  app.use('/api', authRouter);
  app.use('/admin', adminRouter);
};

export default initRouter;
