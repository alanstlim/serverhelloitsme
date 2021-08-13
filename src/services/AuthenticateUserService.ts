import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UsersRepositores } from '../repositories/UsersRepositories'

interface IAuthenticateRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositores = getCustomRepository(UsersRepositores)

    const user = await usersRepositores.findOne({
      email,
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    const token = sign(
      {
        email: user.email,
      },
      '1db08ffa999e5da75f145a5ce53c7c69',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )

    return token
  }
}
