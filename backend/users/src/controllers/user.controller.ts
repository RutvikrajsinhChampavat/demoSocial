class UserController {
  private db;

  constructor(Database: any) {
    this.db = new Database().getDb();
  }

  async getAllUser(req: any, res: any) {
    const db = await this.db;
    try {
      const customers = db.collection('customers').insertOne({
        name: 'tarak',
        email: 'tarak@gmail.com',
      });
      res.send({
        code: 200,
        message: 'All users found',
      });
    } catch (error) {
      res.send({
        code: 500,
        message: 'Error',
        Data: error,
      });
    }
  }
}
export default UserController;
