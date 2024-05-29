// ElectronsAroundTheCores.js
function electrons_around_the_cores() {}
electrons_around_the_cores.prototype.add = function(numbers) {

	if (!Array.isArray(numbers)) {
		return "Parameter has to be array";
	}

	var sum = 0;

	if (numbers.length < 4) {
		return "Array too short";
	}
	else if (numbers.length > 6) {
		return "Array too long";
	}

	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] < 1 || numbers[i] > 6) {
			return "Invalid number in array";
		}
			
		if (numbers[i] % 2 != 0) {
			sum += (numbers[i] - 1);
		}
	}
	
	return sum;
};
