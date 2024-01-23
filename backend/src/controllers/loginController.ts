import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  public static async login(req: Request, res: Response) {
    const credentials = req.body;
    const token = await LoginService.verify(credentials);
    
    res.status(200).send({ token });
  }

  public static async validate(req: Request, res: Response) {
    const token = req.get('authorization');

    if (!token) {
      return res.status(403).send({ message: 'Authotization token missing' });
    }
    await LoginService.validate(token);
    res.sendStatus(100);
  }
}