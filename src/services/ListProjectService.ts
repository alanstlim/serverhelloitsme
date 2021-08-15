import { getCustomRepository } from 'typeorm'
import { ProjectsRepositories } from '../repositories/ProjectsRepositories'

export class ListProjectService {
  async execute() {
    const projectRepositories = getCustomRepository(ProjectsRepositories)

    const projects = await projectRepositories.find()

    return projects
  }
}
