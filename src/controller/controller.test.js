import {addRoute} from './controller'
import {BadRequestError} from '../types/errors'

describe('addRoute', () => {
  it('should throw BadRequestError if no question is provided', async () => {
    const req = {params: {}}
    const res = {}

    await expect(addRoute(req, res)).rejects.toThrow(BadRequestError)
  })

  it('should return the response with status and data', async () => {
    const question = '0+0'
    const req = {params: {q: question}}
    const res = {
      header: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    }

    await addRoute(req, res)

    expect(res.header).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*')
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith('The sum of provided numbers is 0')
  })
})
