import {ActionResponse} from '../types/response'
import {addNumbers} from '../utils/counter'

export const addAction = async (question: string): Promise<ActionResponse> => {
  try {
    const result = addNumbers(question)
    return {
      data: result,
      status: 200,
    }
  } catch (e) {
    return {
      data: e as any,
      status: 500,
    }
  }
}
