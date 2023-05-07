import type { RequestHandler } from 'express';

const validateSecretkey: RequestHandler = (req, res, next) => {
    if (req.body.secretkey != process.env.SECRETKEY) return res.status(401).json({ error: 'Unauthorized' });
    next();
};

export default validateSecretkey;