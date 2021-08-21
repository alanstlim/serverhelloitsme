import { EntityRepository, Repository } from 'typeorm'
import { WorksExperience } from '../entities/WorksExperience'

@EntityRepository(WorksExperience)
export class WorksExperienceRepositories extends Repository<WorksExperience> {}
