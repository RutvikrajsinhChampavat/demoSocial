import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).send({
    Data: 'Hey there it works',
  });
});

router.post('/register', UserController.register);
router.post('/login', UserController.login);
export default router;
