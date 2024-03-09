import {addAction} from './addService'
import {addNumbers} from '../utils/counter'

jest.mock('../utils/counter', () => ({
  addNumbers: jest.fn(),
}))

describe('addAction', () => {
  it('should return the result of addNumbers function with status 200', async () => {
    const question = '1+2'
    const expectedResult = 3

    addNumbers.mockReturnValue(expectedResult)

    const result = await addAction(question)

    expect(result).toEqual({
      data: expectedResult,
      status: 200,
    })
    expect(addNumbers).toHaveBeenCalledWith(question)
  })

  it('should return the error message with status 500 when addNumbers throws an error', async () => {
    const question = '1+2'
    const errorMessage = 'Invalid question'

    addNumbers.mockImplementation(() => {
      throw new Error(errorMessage)
    })

    const result = await addAction(question)

    expect(result).toEqual({
      data: new Error(errorMessage),
      status: 500,
    })
    expect(addNumbers).toHaveBeenCalledWith(question)
  })
})
