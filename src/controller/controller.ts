import {Response, Request} from 'express'
import {addAction} from '../service/addService'
import {countAction} from '../service/countService'
import {combinationsAction} from '../service/combinatiosService'
import {gridAction} from '../service/gridService'
import {BadRequestError} from '../types/errors'

export const addRoute = async (req: Request, res: Response): Promise<any> => {
  const question = req.params.q

  if (!question) {
    throw new BadRequestError({logSource: 'routeHandler', details: 'No question provided'})
  }

  const response = await addAction(question)
  return res.header('Access-Control-Allow-Origin', '*').status(response.status).send(response.data)
}

export const countRoute = async (req: Request, res: Response): Promise<any> => {
  const question = req.params.q

  if (!question) {
    throw new BadRequestError({logSource: 'routeHandler', details: 'No question provided'})
  }

  const response = await countAction(question)
  return res.header('Access-Control-Allow-Origin', '*').status(response.status).send(response.data)
}

export const combinationsRoute = async (req: Request, res: Response): Promise<any> => {
  const question = req.params.q

  if (!question) {
    throw new BadRequestError({logSource: 'routeHandler', details: 'No question provided'})
  }

  const response = await combinationsAction(question)
  return res.header('Access-Control-Allow-Origin', '*').status(response.status).send('todo')
}

export const gridRoute = async (req: Request, res: Response): Promise<any> => {
  const question = req.params.q

  if (!question) {
    throw new BadRequestError({logSource: 'routeHandler', details: 'No question provided'})
  }

  const response = await gridAction(question)
  return res.header('Access-Control-Allow-Origin', '*').status(response.status).send(response.data)
}

export const notImplemented = async (req: Request, res: Response): Promise<any> => {
  return res.header('Access-Control-Allow-Origin', '*').status(404).send('Not implemented')
}
