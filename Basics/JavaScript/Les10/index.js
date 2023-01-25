var isAdmin = false;
// ()
// const IsLoggedIn = isAdmin? 'Welcome Admin, you\'re logged in' : 'You are not authorized!'

// if(isAdmin){
//     console.log("You are admin")
// }else{
//     console.log("Standart user")
// }


var articles = []

let result = articles.length > 0 ? articles.map(item => item.title) : "Data is loading..."

console.log(result)

//  (condition) ? TRUEMESSAGE : FALSEMESSAGE

var x = false;
var y = true;
result = x ? y ? "Y is true" : "Y is false" : "X is false"
// result = x || y ? console.log("X is true and Y is also true!!") : console.log("False none of them is true")
console.log(result)
if (x) {

} else if (y) {

} else {

}

var _name = "atilla"


if (_name === "atilla") {
	// do something
} else if (_name === "mohammad") {
	// do something else
} else if (_name === "ahmad") {
	// do another thing
} else {
	// do the default task
}
// CTRL + SHIFT + I

// console.log(IsLoggedIn);

let twitter_users = [{
	"user": "amkissell0n"
}, {
	"user": "eroseblade1"
}, {
	"user": "llevy2"
}, {
	"user": "fsarath3"
}, {
	"user": "dcarss4"
}, {
	"user": "chilldrup5"
}, {
	"user": "absparry6n"
}, {
	"user": "hbearne7"
}, {
	"user": "gmaccrie8"
}, {
	"user": "aacurteis9n"
}]

twitter_users.map(function (item, index) {

	// if(item.user.toLowerCase().trim().startsWith('a') && item.user.toLowerCase().trim().endsWith('n')){
	//     console.log(item)
	// }
	// console.log(item.user[0])
	// console.log(item.user[item.user.length-1])
	// console.log(item.user[item.user.length-1],"last letter")
	// "Aacurteis9N      " >   .trim()
	let userName = item.user.trim() // removed space from username
	if (item.user[0].toLowerCase().trim() == 'a' && userName[userName.length - 1] == 'n') {
		console.log(item.user)
	}
	// console.log(item.user, item.user[item.user.length-1])
})

// find person who is employee
var persons =
	[{
		"username": "employee-tbuy0"
	}, {
		"username": "hupham1"
	}, {
		"username": "ugottelier2"
	}, {
		"username": "employee-lbrager3"
	}, {
		"username": "laugustin4"
	}, {
		"username": "psagerson5"
	}, {
		"username": "employee-lgregoletti6"
	}, {
		"username": "jgiovanazzi7"
	}, {
		"username": "employee-tstefi8"
	}, {
		"username": "dbleby9"
	}]

let foundlist = []
persons.forEach(function (singleperson) {
	// console.log(singleperson.username.includes("employee"))
	if (singleperson.username.includes("employee")) {
		console.log(singleperson.username)
		// foundlist.push(singleperson.username) => put it in a new array list
	}
})
// console.log(foundlist); => put it in a new array list