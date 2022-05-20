import mongoose from 'mongoose';
import Locals from './Locals';

export class Database {
  public static init() {
    const url = Locals.config().mongooseUrl;
    mongoose.connect(url, {}, (error) => {
      // handle the error case
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log('connected to mongo server');
      }
    });
  }
}
export default mongoose;
