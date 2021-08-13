import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureUser } from './middlewares/ensureUser'

export const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

router.post('/login', authenticateUserController.handle)
router.post('/users', ensureUser, createUserController.handle)
