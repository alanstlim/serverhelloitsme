import { Request, Response, NextFunction } from 'express'

export function ensureUser(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const user = true

  if (user) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}
