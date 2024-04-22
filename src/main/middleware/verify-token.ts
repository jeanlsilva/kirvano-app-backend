import { UnauthorizedError } from '@/usecases/errors';
import { ACCESS_TOKEN } from '@/utils/constants';
import { Request, Response, NextFunction } from 'express';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.access_token !== ACCESS_TOKEN) {
            throw new UnauthorizedError();
        }
        next();
    } catch (error) {
        return res.status(error.httpStatus).json({ 
            message: error.message, 
            errorType: error.constructor.name 
        });
    }
}