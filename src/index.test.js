import app, {expressApp} from './app'

describe('index.js', () => {
  it('should call expressApp method', () => {
    const expressAppSpy = jest.spyOn(app, 'expressApp')
    expressApp()
    expect(expressAppSpy).toHaveBeenCalled()
  })
})
