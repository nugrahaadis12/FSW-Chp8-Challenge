const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const swaggerJSON = require('./swagger.json')
const swaggerUI = require('swagger-ui-express')

const PORT = process.env.PORT || 5000

var corsURL = {
  origin: "http://localhost:3000"
}

// middlewares
app.use(cors(corsURL))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

// use swaggerUI
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})