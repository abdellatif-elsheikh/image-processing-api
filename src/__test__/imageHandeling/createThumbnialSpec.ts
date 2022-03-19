import createThumbnail from '../../imageHandling/createThumbnial';

describe('test create thumbnail file', () => {
	it('test to see if resizing image process works as expected or not', async () => {
		const response = await createThumbnail.resize('snow', 200, 200).catch();
		expect(response).toEqual(
			jasmine.objectContaining({
				status: 400,
				error:
					'image is not found the available images are (snow, porsche, bugatti, coffee, city, desk)',
			})
		);
	});
});
