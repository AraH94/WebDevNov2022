// BurgerKing Ordering Machine

const BurgerKing = (food, drink, sauce) => {
	return new Promise((resolve, reject) => { // resolve = succeeded 
		let foodBool = food.match(/\d/g) == null // true - \d means digits (numbers) - match = if you have to find a word in a long text and you're finding the word 'brown' use => match(/brown/g)
		// ['1', '2', '3'] // null
		let drinkBool = drink.match(/\d/g) == null // true
		let sauceBool = sauce.match(/\d/g) == null // true
		if (foodBool && drinkBool && sauceBool) {
			//
			resolve({
				food: food,
				drink: drink,
				sauce: sauce
			})
		} else {
			// When the result is false
			// ['1', '2', '3']
			reject("Food, drink or sauce cannot contain a number!")
			// reject user request
		}
	})
}

BurgerKing('FriedBurgerWithChicken123', 'Ayran', 'GarlicSauce')
	.then(result => {
		console.log(result);
	})
	.catch(error => console.log(error)) // handle errors
