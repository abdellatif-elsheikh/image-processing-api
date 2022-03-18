import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

// use middleware for app
const morganInstance = morgan('combined');
const helmetInstance = helmet();

// create rate limit object
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 60,
	standardHeaders: true,
	legacyHeaders: false,
	message: 'too many requests please tray agin after 10 minutes',
});

export default {
	morganInstance,
	helmetInstance,
	limiter,
};
