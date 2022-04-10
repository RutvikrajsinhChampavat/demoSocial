import express from 'express'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

const app = express()
// const swaggerDocument = YAML.load('../swagger.yaml'); TODO: r&d swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const userRouter = require('./routes/user.route')
app.use(userRouter)
app.use('/*',()=>{
    console.log("Not found");
});

app.listen(3080,()=>{
    console.log('server up and running...')
})