import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, adm } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, password, adm })

    return response.json(user)
  }
}
