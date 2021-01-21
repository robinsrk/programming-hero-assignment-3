// https://github.com/robinsrk/programming-hero-assignment-3
function kilometerToMeter(kilo) {
	if (kilo > 0) {
		return kilo * 1000;
	}
	else {
		return "Distance can't be 0 or negative value";
	}
}
function budgetCalculator(watch, phone, laptop) {
	if (watch > 0 && phone > 0 && laptop > 0) {
		return (watch * 50) + (phone * 100) + (laptop * 500);
	}
	else {
		return "Product unit can't be less than 1";
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
		return "Day unit can't be less than 1"
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