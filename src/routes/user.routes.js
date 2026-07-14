import { Router } from 'express'
import { createUserController, getAllUserController, getUserByIdController, updateUserController, deleteUserByIdController } from '../controller/user.controller.js'

const route = Router()

route.route('/users').post(createUserController)
route.route('/users').get(getAllUserController)
route.route('/users/:id').get(getUserByIdController)
route.route('/users/:id').delete(deleteUserByIdController)
route.route('/users/:id').put(updateUserController)


export default route