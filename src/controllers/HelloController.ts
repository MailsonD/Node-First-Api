import {Request, Response} from 'express';

class HelloController {
  public helloWorld(req: Request, res: Response): void {
    res.json({its: 'alll okay!'});
  }
}

export default new HelloController();
