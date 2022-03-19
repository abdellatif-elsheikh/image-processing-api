import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test all endpoints and routs', () => {
	describe('test basic endpoint server', () => {
		it('Get the main endpoint', async (): Promise<void> => {
			const response = await request.get('/');
			expect(response.status).toBe(200);
		});
	});

	describe('test the image endpoint', () => {
		it('should get the main image endpoint (/api/image)', async (): Promise<void> => {
			const response = await request.get('/api/image');
			expect(response.status).toBe(200);
		});
		it('should return status 200 (/api/image?image_name=snow)', async (): Promise<void> => {
			const response = await request.get('/api/image?image_name=snow');
			expect(response.status).toBe(200);
		});
		it('should return status 200 (/api/image?image_name=snow&width=200&height=200)', async (): Promise<void> => {
			const response = await request.get(
				'/api/image?image_name=snow&width=200&height=200'
			);
			expect(response.status).toBe(200);
		});
	});

	describe('test invalid dimensions value', () => {
		it('should return status 200 (/api/image?image_name=snow&width=0&height=-200)', async (): Promise<void> => {
			const response = await request.get(
				'/api/image?image_name=snow&width=0&height=-200'
			);
			expect(response.status).toBe(200);
		});
	});
});
