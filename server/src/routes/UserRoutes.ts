import { Router } from 'express'
import * as UserController from '@/controllers/UserController'

const UserRoutes = Router()

UserRoutes.get('/users', UserController.getUsers)

UserRoutes.get('/users/:id', UserController.getUserById)

UserRoutes.post('/users/', UserController.storeUser)

UserRoutes.put('/users/:id', UserController.updateUser)

UserRoutes.delete('/users/:id', UserController.deleteUser)


UserRoutes.get('/users/passports', UserController.joinUserPassport)
UserRoutes.get('/users/balance/greater/:value', UserController.listUserBalanceGreater)
UserRoutes.get('/users/details/balance/greater/:value', UserController.detailsUserBalanceGreater)


export default UserRoutes
