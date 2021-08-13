import { EntityRepository, Repository } from 'typeorm'
import { Projects } from '../entities/Projects'

@EntityRepository(Projects)
export class ProjectsRepositories extends Repository<Projects> {}
