import { Router } from 'express'
import { CreateUserController } from './controllers/users/CreateUserController'
import { ensureUser } from './middlewares/ensureUser'

export const router = Router()

const createUserController = new CreateUserController()

router.post('/users', ensureUser, createUserController.handle)
