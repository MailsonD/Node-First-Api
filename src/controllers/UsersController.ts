import {Request, Response} from 'express';
import User from '../models/User';

class UserController {
  public async allUsers(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);

    console.log(user);
    return res.json(user);
  }
}

export default new UserController();
