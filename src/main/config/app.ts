import express from 'express';
import { setupRoutes } from '@/main/config/setup-routes';

const app = express();
setupRoutes(app);

export default app;
