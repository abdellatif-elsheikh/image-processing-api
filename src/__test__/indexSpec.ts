import myFunc from '../index';

describe('test main', () => {
	it('should return array without second item', () => {
		expect(myFunc([1, 5, 4, 6, 7])).not.toContain(4);
	});
});
