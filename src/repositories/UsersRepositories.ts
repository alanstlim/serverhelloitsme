import { EntityRepository, Repository } from 'typeorm'
import { Users } from '../entities/Users'

@EntityRepository(Users)
export class UsersRepositores extends Repository<Users> {}
