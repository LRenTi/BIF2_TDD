// ElectronsAroundTheCores.js
function electrons_around_the_cores() {}
electrons_around_the_cores.prototype.add = function(numbers) {
	if (!Array.isArray(numbers)) {
		return "Parameter has to be array";
	}

	if (numbers.length < 4) {
		return "Array too short";
	}
};
