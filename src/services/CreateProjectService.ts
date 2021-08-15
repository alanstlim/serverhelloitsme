import { getCustomRepository } from 'typeorm'
import { ProjectsRepositories } from '../repositories/ProjectsRepositories'

export interface IProjectRequest {
  name: string
  urlImg: string
  about: string
  functionalities: string
  technologies: string
}

export class CreateProjectService {
  async execute({
    name,
    urlImg,
    about,
    functionalities,
    technologies,
  }: IProjectRequest) {
    const projectRepositories = getCustomRepository(ProjectsRepositories)

    if (!name) {
      throw new Error('Name incorrect')
    }

    const projectAlreadyExists = await projectRepositories.findOne({
      name,
    })

    if (projectAlreadyExists) {
      throw new Error('Project already exists')
    }

    const project = projectRepositories.create({
      name,
      urlImg,
      about,
      functionalities,
      technologies,
    })

    await projectRepositories.save(project)

    return project
  }
}
