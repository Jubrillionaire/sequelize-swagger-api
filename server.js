const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const logger = require('morgan');
const cors = require('cors')
var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./swagger.json');

 const app = express();
 app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.json())

app.use('/api', routes);

const PORT = process.env.PORT || 3000;




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))