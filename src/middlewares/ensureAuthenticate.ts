import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization
  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(
      token,
      '1db08ffa999e5da75f145a5ce53c7c69',
    ) as IPayload

    request.user_id = sub

    return next()
  } catch (error) {
    return response.status(401).end()
  }
}
