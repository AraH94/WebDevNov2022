function ATM(bankcard, pin) {
	this.bankcard = bankcard;
	this.pin = pin;
	this.accounts = [
		{ name: "John", balance: 1000, cardNumber: 123456789, pin: 1234 },
		{ name: "Mary", balance: 2000, cardNumber: 987654321, pin: 4321 },
		{ name: "Peter", balance: 3000, cardNumber: 135792468, pin: 2468 },
		{ name: "Jane", balance: 4000, cardNumber: 864197532, pin: 7531 },
		{ name: "Mark", balance: 5000, cardNumber: 159357864, pin: 8642 }
	]
}

ATM.prototype.withdraw = function (amount) {
	let account = this.accounts.find(acc => acc.cardNumber === this.bankcard) // find account
	// find returns single object only
	console.log(account)

	// when account(cardnumber) exist is
	if (account !== undefined) {
		// pin validation here
		if (account.pin === this.pin) {
			console.log('pin is correct')
			if (account.balance >= amount) {
				// account.balance = account.balance - amount
				account.balance -= amount
				// +=
				return 'Done, Do not forget take your card back!\nNew balance is ' + account.balance
			} else {
				return 'Insufficient funds'
			}
		} else {
			console.log('invalid pin')
		}
		// end of pin validation
	} else {
		console.log('You are not customer in our bank or invalid card number')
	}

	//return account
}

let atm = new ATM(123456789, 1234);
console.log(atm.withdraw(500))