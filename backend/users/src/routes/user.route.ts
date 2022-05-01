import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Db from '../database/db';

const userRouter = Router();
userRouter.get('/users', (req, res) => {
  new UserController(Db).getAllUser(req, res);
});
export default userRouter;
