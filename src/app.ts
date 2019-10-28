import express from 'express';
import cors from 'cors';
import ConfigDatabase from './config/ConfigDatabase';
import {registerRoutes} from './routes/Router';

class App {
    public express: express.Application;

    public constructor() {
      this.express = express();
      ConfigDatabase.config();
      registerRoutes(this.express);
      this.middlewares();
    }

    private middlewares(): void {
      this.express.use(express.json());
      this.express.use(cors());
    }
}

export default new App().express;
