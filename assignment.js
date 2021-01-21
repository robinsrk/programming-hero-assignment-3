function kilometerToMeter(kilo) {
	return kilo * 1000;
}
function budgetCalculator(watch, phone, laptop) {
	return (watch * 50) + (phone * 100) + (laptop * 500);
}
function hotelCost(night) {
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
function megaFriend(friendsName) {
	let maxLengthName = friendsName[0];
	for (i = 0; i < friendsName.length; i++) {
		if (friendsName[i].length > maxLengthName.length) {
			maxLengthName = friendsName[i];
		}
	}
	return maxLengthName;
}