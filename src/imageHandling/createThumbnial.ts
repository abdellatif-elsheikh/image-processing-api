import sharp from 'sharp';
import fse from 'fs-extra';

class createThumbnail {
	public static createFile = (): void => {
		fse.ensureDir('images/thumbnails');
	};

	public static resize = async (
		name: string,
		width: number,
		height: number
	): Promise<unknown> => {
		this.createFile();
		try {
			await sharp(`images/main/${name}.jpg`)
				.resize({
					width: width,
					height: height,
				})
				.toFormat('jpg')
				.toFile(`images/thumbnails/${name}_${width}_${height}.jpg`);
			return { status: 200 };
		} catch {
			return {
				status: 400,
				error:
					'image is not found the available images are (snow, porsche, bugatti, coffee, city, desk)',
			};
		}
	};
}

export default createThumbnail;
