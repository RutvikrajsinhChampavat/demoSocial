const { MongoClient } = require('mongodb');

class Db {
  private client: any;

  private db: any;

  constructor() {
    this.client = new MongoClient(process.env.DB_URL || '').connect();
  }

  async getDb() {
    try {
      const client = await this.client;
      this.db = client.db('social');
    } catch (error) {
      console.log('connection error', error);
    }
    return this.db;
  }
}
export default Db;
