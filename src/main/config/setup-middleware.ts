import { Express } from 'express';
import { bodyParser, cors, contentType, verifyToken } from '@/main/middleware';

export function setupMiddleware(app: Express): void {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
  app.use(verifyToken);
}
