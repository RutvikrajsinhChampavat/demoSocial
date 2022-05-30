import { Application } from 'express';

class Handler {
  public static notFoundHandler(_express: Application): Application {
    _express.use('*', (req, res) => {
      res.status(404);
      res.send({ message: 'Route not found' });
    });
    return _express;
  }

  // eslint-disable-next-line no-unused-vars
  public static errorHandler(err: any, req: any, res: any, _next: any): any {
    res.status(500).send({ message: err });
  }
}
export default Handler;
