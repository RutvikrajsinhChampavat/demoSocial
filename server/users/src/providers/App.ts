import dotenv from 'dotenv';
import path from 'path';
import Express from './Express';
import { Database } from './Database';

class App {
  public static loadServer(): void {
    Express.init();
  }

  public static loadConfiguration(): void {
    dotenv.config({ path: path.join(__dirname, '../../.env') });
  }

  public static loadDatabase(): void {
    Database.init();
  }
}
export default App;
