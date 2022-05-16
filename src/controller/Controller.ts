import { Request, Response } from 'express';
import { findWords } from '../service/wordsService';

export const wordsRoute = async (req: Request, res: Response) => {
  const wordsResponse = await findWords(req.query.filter);

  return res.header('Access-Control-Allow-Origin', '*').status(wordsResponse.status).json(wordsResponse.body);
};
