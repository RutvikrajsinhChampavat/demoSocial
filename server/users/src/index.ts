import express from 'express';
import console from 'console';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route';
import swaggerDocument from './swagger.json';

dotenv.config();

const app = express();
const port = process.env.PORT || 3080;
app.use(userRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/*', () => {
  console.log('Not found');
});

app.listen(port, () => {
  console.log(`--- Spinning on ${port} with dev environment 💖 ---`);
});
