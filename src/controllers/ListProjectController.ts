import { Request, Response } from 'express'
import { ListProjectService } from '../services/ListProjectService'

export class ListProjectController {
  async handle(request: Request, response: Response) {
    const listProjectService = new ListProjectService()

    const projects = await listProjectService.execute()

    return response.json(projects)
  }
}
