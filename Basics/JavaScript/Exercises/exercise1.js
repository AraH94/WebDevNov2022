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

let user = [{ // difference between name and "name"
	"name": "Ara",
	"age": 28,
	"email": "arahoedemakers@gmail.com",
	"city": "Brussel",
	"phone": "0471081257"
},
{
	"name": "Sofia",
	"age": 29,
	"email": "sofie@gmail.com",
	"city": "Brussel",
	"phone": "123456789"
},
{
	"name": "Peyton",
	"age": 30,
	"email": "peyton@gmail.com",
	"city": "Brussel",
	"phone": "98654321"
},
{
	"name": "Brooke",
	"age": 31,
	"email": "brooke@yandex.com",
	"city": "Istanbul",
	"phone": "214365879"
},
{
	"name": "Rachel",
	"age": 32,
	"email": "rachel@yandex.com",
	"city": "Istanbul",
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
	"city": "Ghent",
	"phone": "132478596"
},
{
	"name": "Ross",
	"age": 35,
	"email": "ross@hotmail.com",
	"city": "Ghent",
	"phone": "6453728193"
},
{
	"name": "Chandler",
	"age": 36,
	"email": "chandler@hotmail.com",
	"city": "Ghent",
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
user.map(function (year) {
	if (year.age < 30)
		console.log(year.age)
})


// 3. Create a function that can find the persons who live in the same city.
// let citylist = []
user.map(function (location) {
	if (location.city.group("Brussel", "Istanbul", "Ghent")) {
		console.log(location.city)
		// citylist.push(location.name.city)
	}
})
// console.log(citylist);

// 4. Create a function that can find the persons who have gmail email.
user.map(function (city) {
	if (city.email.includes("gmail")) {
		console.log(city.email)
	}
})