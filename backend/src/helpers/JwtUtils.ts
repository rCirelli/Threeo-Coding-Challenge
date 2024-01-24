import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import User from '../database/entities/User';
import HttpException from './HttpException';

const secret = process.env.JWT_SECRET as string || 'my-jwt-secret';

class JwtUtils {
  private jwt = jwt;

  private jwtSecret: jwt.Secret = secret;

  public generateToken(user: User): string {
    const { username, email } = user;
    const payload: jwt.JwtPayload = { username, email };

    return this.jwt.sign(payload, this.jwtSecret);
  }

  public decodeToken(token: string): jwt.JwtPayload {
    let decoded: jwt.JwtPayload | string;
    try {
      decoded = this.jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new HttpException(401, 'Token must be valid');
    }
    return decoded as jwt.JwtPayload;
  }
}

export default new JwtUtils();