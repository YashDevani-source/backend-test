import { Router } from 'express'
import { healthController } from '../controller/health.conteoller.js'

const route = Router()

route.route('/').get(healthController)

export default route
