// https://github.com/robinsrk/programming-hero-assignment-3
function kilometerToMeter(kilometer) {
	if (kilometer > 0 ) {
		let meter = kilometer * 1000;
		return meter;
	}
	else {
		return "Unit must be number and greater than 0";
	}
}
function budgetCalculator(watch, phone, laptop) {
	if (watch > 0 && phone > 0 && laptop > 0) {
		let totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
		return totalCost;
	}
	else {
		return "Unit must be number and greater than 0";
	}
}
function hotelCost(night) {
	if (night > 0) {
		let cost = 0;
		while (night > 0) {
			if (night <= 10) {
				cost += 100;
			}
			else if (night <= 20) {
				cost += 80;
			}
			else {
				cost += 50;
			}
			night--;
		}
		return cost;
	}
	else {
		return "Unit must be number and greater than 0"
	}
}
function megaFriend(friendsName) {
	if (friendsName.length > 0) {
		let maxLengthName = friendsName[0];
		for (i = 0; i < friendsName.length; i++) {
			if (friendsName[i].length > maxLengthName.length) {
				maxLengthName = friendsName[i];
			}
		}
		return maxLengthName;
	}
	else {
		return "Array can't be empty";
	}
}