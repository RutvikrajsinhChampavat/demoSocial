import User from '../models/User';

class UserController {
  public static async addUser(req: any, res: any): Promise<any> {
    try {
      const body = req.query;
      const oUser = await User.create(body);
      if (!oUser) return res.status(500).send({ message: 'User create error' });
      return res.status(200).send({ message: 'success', data: oUser });
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }
}
export default UserController;
