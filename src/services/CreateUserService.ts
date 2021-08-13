import { getCustomRepository } from 'typeorm'
import { UsersRepositores } from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string
  email: string
}

export class CreateUserService {
  async execute({ name, email }: IUserRequest) {
    const usersRepositores = getCustomRepository(UsersRepositores)

    if (!email) {
      throw new Error('Email incorrect')
    }

    const userAlreadyExists = await usersRepositores.findOne({
      email,
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = usersRepositores.create({
      name,
      email,
    })

    await usersRepositores.save(user)

    return user
  }
}
