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
});