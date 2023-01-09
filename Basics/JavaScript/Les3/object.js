const car = {
	color: 'black',
	model: 'bmw 2012',
	energy: 'benzine',
}

car.smart = false;
car.energy = "diesel";
car.costumers = ['a', 'b', 'c', 'd'];

car.costumers[0] = 'f';

car.showInfo = function () {
	console.log('Hello World', this.model)
}

console.log(car);
console.table(car);
car.showInfo();

const myInfo = {
	name: 'Ara',
	age: '28',
	email: 'jane@doe.com',
	showMyInfo: function myfunction() {
		console.log(`Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}`)
	}
}

myInfo.showMyInfo()

// Make own info
// const info = {
// 	name: 'Sofia',
// 	birth: '08/08/1988',
// 	gender: 'Female',
// 	phone: '123456789',
// 	haarkleur: 'bruin',
// 	ogen: 'blauw',
// 	lengte: '1m75'
// }

// info.SocialMedia = ['Facebook', 'Instagram', 'LinkedIn']
// info.FavoriteSeries = ['Friends', 'One Tree Hill', 'Stranger Things']

// console.log(info)
// console.table(info)