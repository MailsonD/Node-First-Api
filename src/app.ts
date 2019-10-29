import express from 'express';
import cors from 'cors';
import ConfigDatabase from './config/ConfigDatabase';
import routes from './routes/Router';

class App {
    public express: express.Application;

    public constructor() {
      this.express = express();
      ConfigDatabase.config();
      this.routes();
      this.middlewares();
    }

    private middlewares(): void {
      this.express.use(express.json());
      this.express.use(cors());
    }

    private routes(): void {
      this.express.use(routes);
    }
}

export default new App().express;
