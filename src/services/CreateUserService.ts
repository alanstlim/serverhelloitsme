import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { UsersRepositores } from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string
  email: string
  password: string
  adm?: boolean
}

export class CreateUserService {
  async execute({ name, email, password, adm }: IUserRequest) {
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

    const passwordHash = await hash(password, 8)

    const user = usersRepositores.create({
      name,
      email,
      adm,
      password: passwordHash,
    })

    await usersRepositores.save(user)

    return user
  }
}
