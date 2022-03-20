import { Request, Response } from 'express';
import createThumbnail from '../imageHandling/createThumbnial';
import validateImage from '../imageHandling/validateImage';
import path from 'path';

class imageController {
	public static display = async (req: Request, res: Response): Promise<void> => {
		const image = (req.query.image_name || '').toString();
		const width = req.query.width || null;
		const height = req.query.height || null;

		const isImageExist = validateImage.isMainImageExist(image);
		const areDimensionsValid = validateImage.areDimensionsValid(
			width as unknown as number,
			height as unknown as number
		);

		if (isImageExist) {
			if (width && height) {
				if (areDimensionsValid) {
					image as unknown as number;
					await createThumbnail.resize(image, +width, +height);
					res.sendFile(path.resolve(`images/thumbnails/${image}_${width}_${height}.jpg`));
				} else {
					res.send('please type a valid width and height bigger than 0');
				}
			} else {
				res.sendFile(path.resolve(`images/main/${image}.jpg`));
			}
		} else res.sendFile(path.resolve('public/image.html'));
	};
}

export default imageController;
