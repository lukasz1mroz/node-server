import { findWords } from './wordsService';
import { CustomError } from '../types/errors';

describe('wordsService', () => {
  it('should throw an error if not getting filter parameter', async () => {
    const result = findWords();
    await expect(result).rejects.toThrow(CustomError);
  });
  it("should get top ten words from last 25 stories' titles", async () => {
    const result = await findWords('twentyFive');
    expect(result).toBeTruthy();
  });
});
