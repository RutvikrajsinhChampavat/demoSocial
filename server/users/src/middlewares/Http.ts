import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compress from 'compression';
import swaggerUi from 'swagger-ui-express';
import Locals from '../providers/Locals';
import swaggerDocument from '../swagger.json';

class Http {
  public static mount(_express: Application): Application {
    _express.use(
      bodyParser.json({
        limit: Locals.config().maxUploadLimit,
      }),
    );
    _express.use(
      bodyParser.urlencoded({
        limit: Locals.config().maxUploadLimit,
        parameterLimit: Locals.config().maxParameterLimit,
        extended: false,
      }),
    );
    _express.disable('x-powered-by');
    _express.use(cors());
    _express.use(compress());
    _express.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
    );

    return _express;
  }
}
export default Http;
