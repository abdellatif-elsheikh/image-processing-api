import express from 'express';
import path from 'path';
import validateImage from '../../imageHandling/validateImage';
import createThumbnail from '../../imageHandling/createThumbnial';

const image: express.Router = express.Router();

image.get('/', async (req: express.Request, res: express.Response) => {
	const image = req.query.image_name || '';
	const isImageExist = validateImage.isMainImageExist(image.toString());
	if (isImageExist) {
		res.sendFile(path.resolve(`images/main/${image}.jpg`));
	} else res.sendFile(path.resolve('public/image.html'));
});

export default image;
