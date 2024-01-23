import { JwtPayload } from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';
import { UserCredentials } from '../database/entities/User';
import HttpException from '../helpers/HttpException';
import jwtUtils from '../helpers/JwtUtils';

export default class LoginService {
  public static async verify(credentials: UserCredentials) {
    const exception = new HttpException(401, 'Incorrect email or password');

    const { email, password } = credentials;
    
    const user = await UserModel.findOne(email);
    
    if (!user) {
      throw exception;
    }

    if (!password === user.password) {
      throw exception;
    }

    return jwtUtils.generateToken(user);
  }

  public static validate(token: string): JwtPayload {
    const payload = jwtUtils.decodeToken(token);
    return payload;
  }
}