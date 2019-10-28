import express from 'express';
import HelloController from '../controllers/HelloController';

export function registerRoutes(app: express.Application): void {
  app.get('/', HelloController.helloWorld);
}


