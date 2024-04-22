import express from 'express';
import { setupRoutes } from './setup-routes';
import { setupMiddleware } from './setup-middleware'

const app = express();
setupMiddleware(app);
setupRoutes(app);

export default app;
