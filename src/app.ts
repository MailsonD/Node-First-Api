import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
    public express: express.Application;

    public constructor() {
      this.express = express();

      this.middlewares();
      this.routes();
      this.database();
    }

    private middlewares(): void {
      this.express.use(express.json);
      this.express.use(cors);
    }

    private database(): void {
      mongoose.connect('mongodb://localhost:27017/firstApi', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('Connection acepted!');
      }).catch((err) => {
        console.log(err);
      });
    }

    private routes(): void {
      this.express.get('/', (req, res) => {
        res.json({ok: 'its all okay!'});
      });
    }
}

export default new App().express;
