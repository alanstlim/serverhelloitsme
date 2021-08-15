import { Request, Response } from 'express'
import { CreateProjectService } from '../services/CreateProjectService'

export class CreateProjectController {
  async handle(request: Request, response: Response) {
    const { name, url_img, about, functionalities, technologies } = request.body

    const createProjectService = new CreateProjectService()

    const project = await createProjectService.execute({
      name,
      url_img,
      about,
      functionalities,
      technologies,
    })

    return response.json(project)
  }
}
