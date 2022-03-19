import express from 'express';
import router from './routes';
import middlewares from './middlewares';

// create app instance
const app = express();
const port = 3000;

// use middleWares
app.use(middlewares.helmetInstance, middlewares.morganInstance, middlewares.limiter);
// create router
app.use(router);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(
		`please open the flowing link to view the project http://localhost:${port}`
	);
});

export default app;
