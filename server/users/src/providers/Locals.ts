import dotenv from 'dotenv';
import path from 'path';
import { Application } from 'express';

class Locals {
  public static config(): any {
    dotenv.config({ path: path.join(__dirname, '../../.env') });
    const port = process.env.PORT || 8030;
    const maxUploadLimit = process.env.maxUploadLimit || '50mb';
    const maxParameterLimit = process.env.maxParameterLimit || 1000;
    const mongooseUrl = process.env.DB_URL;
    const processId = process.pid || '';

    return {
      port,
      maxUploadLimit,
      maxParameterLimit,
      mongooseUrl,
      processId,
    };
  }

  public static init(_express: Application): Application {
    const express = _express;
    express.locals.app = this.config();
    return express;
  }
}
export default Locals;
