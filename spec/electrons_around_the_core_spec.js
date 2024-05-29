describe('Electrons around the cores', function() {
	beforeEach(function() {
		findElectrons = new electrons_around_the_cores();
	});

	it('should return "Parameter has to be array" for a parameter that is not an array', function() {
		expect(findElectrons.add(1)).toEqual("Parameter has to be array");
	});
});
