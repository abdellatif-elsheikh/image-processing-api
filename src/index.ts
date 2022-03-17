import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import router from './routes';
// import sharp from 'sharp';

// create app instance
const app = express();
const port = 5000;

// use middleware for app
app.use(helmet());
app.use(morgan('combined'));

// create rate limit object
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 60,
	standardHeaders: true,
	legacyHeaders: false,
	message: 'too many requests please tray agin after 10 minutes',
});
// use rate limiter lib
app.use(limiter);

// create router
app.use('/api/image', router);

app.listen(port, () => {
	console.log(
		`please open the flowing link to view the project http://localhost/${port}`
	);
});
