import {ActionResponse} from '../types/response'
import {InternalServerError} from '../types/errors'

export const combinationsAction = async (question: string): Promise<ActionResponse> => {
  try {
    // TODO: Add logic here check input and output combinations
    return {
      data: question,
      status: 200,
    }
  } catch (e) {
    throw new InternalServerError({logSource: 'addService', description: 'Error from errorRoute in Controller'})
  }
}
