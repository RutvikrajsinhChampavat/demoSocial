import express from 'express';
import console from 'console';
import userRouter from './routes/user.route';

const app = express();
// const swaggerDocument = YAML.load('../swagger.yaml'); TODO: r&d swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRouter);
app.use('/*', () => {
  console.log('Not found');
});

app.listen(3080, () => {
  console.log(`--- Spinning on 3080 with dev environment 💖 ---`);
});
