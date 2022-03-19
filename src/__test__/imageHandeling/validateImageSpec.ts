import validateImage from '../../imageHandling/validateImage';

describe('make tests on validate the image resize inputs', () => {
	it('returns true if the image is exist', () => {
		const validation = validateImage.isMainImageExist('snow');
		expect(validation).toBeTrue();
	});

	it('should be false unless we make an image with that size and name', () => {
		const validation = validateImage.isThumbImageExist('jkk_200_200');
		expect(validation).toBeFalse();
	});

	it('checks if image dimensions bigger than 0 or not', () => {
		const dimensions = validateImage.areDimensionsValid(0, 0);
		expect(dimensions).toBeFalse();
	});
});
