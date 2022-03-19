import createThumbnail from '../../imageHandling/createThumbnial';

describe('test create thumbnail file', () => {
	it('test to see if resizing image process works as expected or not', async () => {
		const response = await createThumbnail.resize('notValidImageName', 200, 200).catch();
		expect(response).toEqual(
			jasmine.objectContaining({
				status: 400,
			})
		);
	});
});
