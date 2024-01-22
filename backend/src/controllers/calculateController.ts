import { Request, Response } from 'express';
import Calculator from '../services/CalculatorService';

export default class CalculateController {
  private calc = new Calculator();

  private getNumbers(req: Request) : number[] {
    const { n1, n2 } = req.query;
    const num1 = Number(n1);
    const num2 = Number(n2);
    if (num1 !== num1 || num2 !== num2) throw new Error("Parameter is not a number");
    
    return [num1, num2];
  }

  public async sum(req: Request, res: Response) {
    try {
      const [num1, num2] = this.getNumbers(req);
      const result = this.calc.sum(num1, num2);
      res.status(200).send(result.toString());
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ status: 'BAD REQUEST', message: error.message });
      }
    }
  }

  public async subtract(req: Request, res: Response) {
    try {
      const [num1, num2] = this.getNumbers(req);
      const result = this.calc.sum(num1, num2);
      res.status(200).send(result.toString());
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ status: 'BAD REQUEST', message: error.message });
      }
    }
  }

  public async multiply(req: Request, res: Response) {
    try {
      const [num1, num2] = this.getNumbers(req);
      const result = this.calc.multiply(num1, num2);
      res.status(200).send(result.toString());
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ status: 'BAD REQUEST', message: error.message });
      }
    }
  }

  public async divide(req: Request, res: Response) {
    try {
      const [num1, num2] = this.getNumbers(req);
      const result = this.calc.divide(num1, num2);
      res.status(200).send(result.toString());
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ status: 'BAD REQUEST', message: error.message });
      }
    }
  }
}
