describe('Electrons around the cores', function() {
	beforeEach(function() {
		findElectrons = new electrons_around_the_cores();
	});

	it('should return "Parameter has to be array" for a parameter that is not an array', function() {
		expect(findElectrons.add(1)).toEqual("Parameter has to be array");
	});

	it('should return "Array too short" for a parameter that is shorter than 4', function() {
		expect(findElectrons.add([5, 3, 5])).toEqual("Array too short");
	});

	it('should return "Array too long" for a parameter that is longer than 6', function() {
		expect(findElectrons.add([5, 3, 5, 1, 4, 5, 6])).toEqual("Array too long");
	});

	it('should return 0 if array with 1s', function() {
		expect(findElectrons.add([1, 1, 1, 1])).toEqual(0);
	});

	it('should return 0 if array with 1s and 2', function() {
		expect(findElectrons.add([2, 1, 1, 1])).toEqual(0);
	});

	it('should return 0 if array with 1s and 4', function() {
		expect(findElectrons.add([1, 1, 4, 1])).toEqual(0);
	});

	it('should return 4 if array with 1s and 5', function() {
		expect(findElectrons.add([1, 1, 1, 5])).toEqual(4);
	});

	it('should return 6 if array is [3, 6, 2, 5]', function() {
		expect(findElectrons.add([3, 6, 2, 5])).toEqual(6);
	});

	it('should return 12 if array is [3, 5, 3, 5]', function() {
		expect(findElectrons.add([3, 5, 3, 5])).toEqual(12);
	});

	it('should return 12 if array is [3, 5, 3, 5]', function() {
		expect(findElectrons.add([3, 5, 3, 5])).toEqual(12);
	});

	it('should return 12 if array is [3, 5, 3, 5]', function() {
		expect(findElectrons.add([3, 5, 3, 5])).toEqual(12);
	});

	it('should return 6 if array is [3, 6, 1, 2, 5]', function() {
		expect(findElectrons.add([3, 6, 1, 2, 5])).toEqual(6);
	});

	it('should return 10 if array is [3, 1, 2, 5, 5, 6]', function() {
		expect(findElectrons.add([3, 1, 2, 5, 5, 6])).toEqual(10);
	});

	it('should return "Invalid number in array" if a number is smaller than 1', function() {
		expect(findElectrons.add([0, 3, 5, 1, 1, 1])).toEqual("Invalid number in array");
	});

	it('should return "Invalid number in array" if a number is bigger than 6', function() {
		expect(findElectrons.add([1, 7, 5, 3])).toEqual("Invalid number in array");
	});
});