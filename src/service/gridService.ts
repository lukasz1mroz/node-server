import {ActionResponse} from '../types/response'
import {InternalServerError} from '../types/errors'

export const gridAction = async (question: string): Promise<ActionResponse> => {
  try {
    const result: string[][] = []
    const length = Math.ceil(question.length / 2)
    for (let i = 0; i < question.length; i += length) {
      const row = question.slice(i, i + length).split('')
      result.push(row)
    }

    return {
      data: `Grid: <br><br> [[${result[0]}] <br> [${result[1]}]]`,
      status: 200,
    }
  } catch (e) {
    throw new InternalServerError({logSource: 'addService', description: 'Error from errorRoute in Controller'})
  }
}
