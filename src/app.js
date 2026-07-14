import express from 'express'

import userRoute from "./routes/user.routes.js"
import healthRoute from './routes/health.route.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api',userRoute)
app.use('api/health', healthRoute)

export default app