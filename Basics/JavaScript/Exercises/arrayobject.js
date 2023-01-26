// 1. Create an array of objects with the following properties and values (10 objects)

// Note: 3 of objects email should be @gmail.com and 3 of objects email @yandex.com and 4 of objects email should be @hotmail.com
// Note: 3 of objects city should be Brussel and 3 of objects city should be Istanbul and 4 of objects city should be Ghent

/*
 name: string
 age: number
 email: string
 city: string
 phone: string
*/

const user = [{ // difference between name and "name"
	"name": "Ara",
	"age": 28,
	"email": "arahoedemakers@hotmail.com",
	"city": "Brussel",
	"phone": "0471081257"
},
{
	"name": "Sofia",
	"age": 29,
	"email": "sofie@gmail.com",
	"city": "Ghent",
	"phone": "123456789"
},
{
	"name": "Peyton",
	"age": 24,
	"email": "peyton@yandex.com",
	"city": "Istanbul",
	"phone": "98654321"
},
{
	"name": "Brooke",
	"age": 31,
	"email": "brooke@hotmail.com",
	"city": "Brussel",
	"phone": "214365879"
},
{
	"name": "Rachel",
	"age": 27,
	"email": "rachel@gmail.com",
	"city": "Ghent",
	"phone": "978563412"
},
{
	"name": "Monica",
	"age": 33,
	"email": "monica@yandex.com",
	"city": "Istanbul",
	"phone": "0471081257"
},
{
	"name": "Phoebe",
	"age": 34,
	"email": "phoebe@hotmail.com",
	"city": "Brussel",
	"phone": "132478596"
},
{
	"name": "Ross",
	"age": 35,
	"email": "ross@gmail.com",
	"city": "Ghent",
	"phone": "6453728193"
},
{
	"name": "Chandler",
	"age": 36,
	"email": "chandler@yandex.com",
	"city": "Istanbul",
	"phone": "7482938415"
},
{
	"name": "Joey",
	"age": 37,
	"email": "joey@hotmail.com",
	"city": "Ghent",
	"phone": "826493517"
}]

console.log(user);

// 2. Create a function that can find the persons less than 30 years old.
function FindUsersByAge(age, arraydata) {
	return arraydata.filter(function (obj) {
		return obj.age < age
	})
}
console.log(FindUsersByAge(30, user));

// This way takes more memory, not a good way
// user.map(function (year) {
// 	if (year.age < 30)
// 		console.log(year.age)
// })

// 3. Create a function that can find the persons who live in the same city.
// function FindUsersByCity(city) {
// 	return user.filter(function (obj) {
// 		return obj.city.includes(city)
// 	})
// }
// console.log(FindUsersByCity("Ghent"));

const cities = ['Brussel', 'Ghent', 'Istanbul']
let result = user.map(function (person) {
	return cities.map(city => person.city === city ? person : '')
})
console.log(result)

// My own try
// let citylist = []
// user.map(function (location) {
// user.sort(function (location) {
// 	if (location.city.includes("Brussel", "Istanbul", "Ghent")) {
// console.log(location.city)
// 		citylist.push(location.city)
// 	}
// })
// console.log(citylist);

// 4. Create a function that can find the persons who have gmail email.
function FindUsersByEmail(domain){
	return  user.filter(function(user){ // return new filtered array
		return user.email.includes(domain) // gmail.com or hotmail.com or yandex.com
	})
}
console.log(FindUsersByEmail('gmail'))

// My own try
// user.map(function (city) {
// 	if (city.email.includes("gmail")) {
// 		console.log(city.email)
// 	}
// })