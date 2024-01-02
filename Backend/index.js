const env = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const sequelize = require('./config/database')
require('./app/services/saveKeys')

const authRoutes = require('./routes/auth')
const employeeRoutes = require('./routes/employee')
const locationsRoutes = require('./routes/locations')
const settingsRoutes = require('./routes/settings')
const devicesRoutes = require('./routes/devices')
const responsiveRoutes = require('./routes/responsive')
const userRoutes = require('./routes/user')
const errorHandler = require('./app/middlewares/errorHandler')

env.config()
app.use(bodyParser.json())

app.use(cors({
  origin: '*'
}))

app.use(authRoutes)
app.use(employeeRoutes)
app.use(devicesRoutes)
app.use(responsiveRoutes)
app.use(userRoutes)
app.use(locationsRoutes)
app.use(settingsRoutes)
app.use(express.static('public'))

app.use(errorHandler)

sequelize
  //.sync({force : true})
  .sync()
  .then(() => {
    app.listen(process.env.PORT)
    //pending set timezone
    console.log('App listening on port ' + process.env.PORT)
  })
  .catch((err) => {
    console.log(err)
  })
