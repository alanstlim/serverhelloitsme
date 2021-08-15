import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateProjectController } from './controllers/CreateProjectController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListProjectController } from './controllers/ListProjectController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticate } from './middlewares/ensureAuthenticate'

export const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

const createProjectController = new CreateProjectController()
const listProjectController = new ListProjectController()

router.post('/login', authenticateUserController.handle)
router.post(
  '/user',
  ensureAuthenticate,
  ensureAdmin,
  createUserController.handle,
)

router.get('/projects', listProjectController.handle)
router.post(
  '/project',
  ensureAuthenticate,
  ensureAdmin,
  createProjectController.handle,
)
