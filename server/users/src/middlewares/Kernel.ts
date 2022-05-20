import { Application } from 'express';
import Http from './Http';

class Kernel {
  public static init(_express: Application): Application {
    Http.mount(_express);
    return _express;
  }
}
export default Kernel;
