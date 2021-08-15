import { getCustomRepository } from 'typeorm'
import { ProjectsRepositories } from '../repositories/ProjectsRepositories'

interface IProjectRequest {
  name: string
  url_img: string
  about: string
  functionalities: string
  technologies: string
}

export class CreateProjectService {
  async execute({
    name,
    url_img,
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
      url_img,
      about,
      functionalities,
      technologies,
    })

    await projectRepositories.save(project)

    return project
  }
}
