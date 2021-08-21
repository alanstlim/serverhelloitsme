import { getCustomRepository } from 'typeorm'
import { WorksExperienceRepositories } from '../repositories/WorksExperienceRepositories'

export class ListWorksExperienceService {
  async execute() {
    const worksExperienceRepositories = getCustomRepository(
      WorksExperienceRepositories,
    )

    const worksExperience = await worksExperienceRepositories.find()

    return worksExperience
  }
}
