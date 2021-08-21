import { Request, Response } from 'express'
import { ListWorksExperienceService } from '../services/ListWorksExperienceService'

export class ListWorksExperienceController {
  async handle(request: Request, response: Response) {
    const listWorksExperienceService = new ListWorksExperienceService()

    const worksExp = await listWorksExperienceService.execute()

    return response.json(worksExp)
  }
}
