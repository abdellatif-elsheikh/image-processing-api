import fse from 'fs-extra';

class validateImage {
	public static isMainImageExist = (imageName: string): boolean => {
		return fse.existsSync(`images/main/${imageName}.jpg`);
	};

	public static isThumbImageExist = (imageName: string): boolean => {
		return fse.existsSync(`images/thumbnails/${imageName}.jpg`);
	};

	public static areDimensionsValid = (
		imageWidth: number,
		imageHeight: number
	): boolean => {
		if (imageWidth > 0 && imageHeight > 0) {
			return true;
		}
		return false;
	};
}

export default validateImage;
