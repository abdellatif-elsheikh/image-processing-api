import { Router, Request, Response } from 'express';
import path from 'path';
import image from './api/imageDisplay';

const router = Router();

// create the main front end route
router.get('/', (_req: Request, res: Response) => {
	res.sendFile(path.resolve('public/index.html'));
});

router.use('/api/image', image);

export default router;
