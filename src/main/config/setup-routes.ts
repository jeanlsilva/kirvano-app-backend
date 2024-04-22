import { Express, Router } from "express";

export function setupRoutes(app: Express): void {
    const router = Router();
    app.use('/', router);
}