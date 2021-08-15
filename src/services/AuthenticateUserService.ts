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
      process.env.SECRET_WORD,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )

    return token
  }
}
