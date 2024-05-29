// ElectronsAroundTheCores.js
function electrons_around_the_cores() {}
electrons_around_the_cores.prototype.add = function(numbers) {
	if (!Array.isArray(numbers)) {
		return "Parameter has to be array";
	}

	if (numbers.length < 4) {
		return "Array too short";
	} else if (numbers.length > 6) {
		return "Array too long";
	} else {
		for (var i = 0; i < numbers.length; i++) {
			if (numbers[i] === 3) {
				return 1;
			}
			if (numbers[i] === 5) {
				return 4;
			}
		}
		return 0;
	}
};
