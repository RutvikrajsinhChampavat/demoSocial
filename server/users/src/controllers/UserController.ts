import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import Locals from '../providers/Locals';

class UserController {
  public static async register(req: any, res: any): Promise<any> {
    try {
      const body = req.body;
      const oExistingUser = await User.findOne({ sUserName: body.sUserName });

      if (oExistingUser) {
        return res.status(500).send({ message: 'User already exists.' });
      }

      const encryPass = await bcryptjs.hash(body.sPassword, 10);

      body.sPassword = encryPass;

      const oUser = await User.create(body);
      if (!oUser) {
        return res
          .status(500)
          .send({ message: 'Error in creating new account.' });
      }
      return res
        .status(200)
        .send({ message: 'Account created successfully', data: oUser });
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }

  public static async login(req: any, res: any): Promise<any> {
    try {
      const body = req.body;

      const oExistingUser = await User.findOne({ sEmail: body.sEmail });

      if (
        oExistingUser &&
        (await bcryptjs.compare(body.sPassword, oExistingUser.sPassword))
      ) {
        if (oExistingUser.eStatus === 'pending') {
          res
            .status(400)
            .send({ message: 'Please validate your email to login !' });
        } else {
          const token = jwt.sign(
            { sEmail: req.body.sEmail },
            Locals.config().secret,
          );

          oExistingUser.sToken = token;

          res
            .status(200)
            .send({ message: 'Loggedin successfully !', data: oExistingUser });
        }
      } else if (!oExistingUser) {
        res.status(404).send({ message: 'User not found !' });
      } else {
        res.status(400).send({ message: 'Check credentials !' });
      }
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }
}
export default UserController;
