import 'express-async-errors';
import express from 'express';
import * as router from './routes';
import errorMiddleware from './middlewares/error.middleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.router();

    this.app.use(errorMiddleware);
  }

  private config():void {
    this.app.use(express.json());
  }

  private router():void {
    this.app.use('/login', router.loginRoute);
    this.app.use('/calc', router.calculateRoute);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
