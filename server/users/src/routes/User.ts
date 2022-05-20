import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();
router.get('/', (_, res) => {
  res.status(200).send({
    Data: 'Hey there it works',
  });
});
router.get('/add', UserController.addUser);
export default router;
