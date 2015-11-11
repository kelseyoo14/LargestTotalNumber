//function to compare numbers in list and find largest
function compareNums(numList) {
	var oldNumTotal = 0;
	var largestNum, newNumTotal, phoneNum;
	for (var i = 0; i < numList.length; i++) {
		phoneNum = numList[i];
		newNumTotal = addNum(phoneNum);
		if (newNumTotal >= oldNumTotal) {
			largestNum = phoneNum;
			oldNumTotal = newNumTotal;
		}
	}
	return largestNum
}

//function to add phone number together
function addNum(phoneNum) {
	var total = 0;
	var currentNum;
	phoneArray = phoneNum.split("");
	for (var i = 0; i < phoneArray.length; i++) {
		currentNum = phoneArray[i];
		if (parseInt(currentNum)) {
			total += parseInt(currentNum);
		}
	}
	return total;
}


//testing below
var arrayOfNums = ['123-456-7777', '963-481-7945', '111-222-3333'];
console.log(compareNums(arrayOfNums));

arrayOfNums = ['555-555-5555','111-111-1111','555-555-5456','222-121-2121']
console.log(compareNums(arrayOfNums));

arrayOfNums = ['123-456-7899']
console.log(compareNums(arrayOfNums));
