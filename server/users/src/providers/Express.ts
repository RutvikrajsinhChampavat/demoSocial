import express, { Application } from 'express';
import console from 'console';
import Locals from './Locals';
import Kernel from '../middlewares/Kernel';
import UserRoutes from '../routes/User';
import Handler from '../exception/Handler';

class Express {
  public express: Application;

  constructor() {
    this.express = express();
    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }

  private mountMiddlewares(): void {
    this.express = Kernel.init(this.express);
  }

  private mountRoutes(): void {
    this.express = this.express.use('/api/v1', UserRoutes);
  }

  private mountNotFountHandler(): void {
    this.express = Handler.notFoundHandler(this.express);
  }

  public init(): any {
    const { port } = Locals.config();
    this.mountNotFountHandler();
    this.express.use(Handler.errorHandler);

    this.express
      .listen(port, () =>
        console.log(
          '\x1b[33m%s\x1b[0m',
          `Server ${
            Locals.config().processId
          } :: Running @ 'http://localhost:${port}'`,
        ),
      )
      .on('error', (_error) => console.log('Error: ', _error.message));
  }
}
export default new Express();
