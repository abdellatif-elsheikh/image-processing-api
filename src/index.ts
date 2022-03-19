import express from 'express';
import router from './routes';
import middlewares from './middlewares';
import path from 'path';

// create app instance
const app = express();
const port = 8000;

// use middleWares
app.use(middlewares.helmetInstance, middlewares.morganInstance, middlewares.limiter);
// create router
app.use('/api', router);

// create the main front end route
app.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(
		`please open the flowing link to view the project http://localhost/${port}`
	);
});
