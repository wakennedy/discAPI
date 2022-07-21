import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called.`);
    return res.status(200).json({
        message: 'pong',
        object: {
            name: "test",
            test: "this is a test"
        }
    });
};

export default { serverHealthCheck };
