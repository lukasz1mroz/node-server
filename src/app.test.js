import request from 'supertest'
import {expressApp} from './app'

describe('Express App', () => {
  let server

  beforeAll(async () => {
    server = await expressApp()
  })

  afterAll(async () => {
    await server.close()
  })

  it('should return a 200 status code for GET /add/1,2', async () => {
    const response = await request(server).get('/add/1,2')
    expect(response.status).toBe(200)
  })

  it('should return a 404 status code for GET /nonexistent', async () => {
    const response = await request(server).get('/nonexistent')
    expect(response.status).toBe(404)
  })
})
