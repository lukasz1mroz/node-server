import {ActionResponse} from '../types/response'
import {InternalServerError} from '../types/errors'
import {countWordsCononantsVowels} from '../utils/counter'

export const countAction = async (question: string): Promise<ActionResponse> => {
  try {
    const result = countWordsCononantsVowels(question)

    return {
      data: result,
      status: 200,
    }
  } catch (e) {
    throw new InternalServerError({logSource: 'addService'})
  }
}
