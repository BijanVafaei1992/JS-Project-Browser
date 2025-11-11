// This file sets up the routes for the application using the IndexController.

import { Application } from 'express';
import IndexController from '../controllers/index';

export const setRoutes = (app: Application): void => {
  // define your routes here, e.g.:
  app.get('/', (req, res) => {
    res.send('Hello World from Bijan');
  });
};