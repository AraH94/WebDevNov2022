// Ecmascript 5

// task1 > task2 > task3 >

// function Keeper1(callback){
// 	console.log('Keeper1');
// 	return callback()
// }

// function Keeper2(callback){
// 	console.log('Keeper2');
// 	return callback()
// }

// function GetMyFunction(callback) {
// 	callback() // this parameter needs to be a function
// }

// GetMyFunction(function () {
// 	console.log('Hello world');
// })

// let company = "";

// One of the tasks
// function CreateCompanyName(data, callback) {
// 	data = 'Coffee';
// 	return callback(data);
// }

// CreateCompanyName(company,function(data){
// 	console.log(data);
// })

// function SplitUpLetters(str){
// 	console.log(str.split(''));
// }
// CreateCompanyName(company,(company)=>{ // OR CreateCompanyName(company,function(company){
// 	return SplitUpLetters(company);
// })

// function A(data) {
// 	data = "Coffee"
// 	console.log(data);
// }

// A("")

// Ecmascript v6
async function Keeper1(name) {
	// await
	const getName = await name;
	return getName;
}

// Keeper1('Coffee')
// 	.then(function (data) {
// 		let newValue = data.toUpperCase() // letters to upper
// 		return newValue
// 	})
// 	.then(data => {
// 		console.log(data);
// 	})

// Keeper1('Ara')
// 	.then(a => a.toUpperCase())
// 	.then(b => b.split(''))
// 	.then(c => {
// 		console.log(c)
// 	})

const PrintWelcomeMessage = async msg => {
	try {
		let data = await msg // await for msg data
		throw Error(); // forcing try catch block to print error
		return data
	} catch (error) {
		console.log(error, "Something's gone wrong");
	}
}

// console.log(PrintWelcomeMessage('Hello')) // incorrect

// Catch block

function ChangeLettersToUpper(str) { // You can put it above PrintWelcomeMessage OR see line 87
	console.log(str.toUpperCase())
}

PrintWelcomeMessage('Hello')
	.then(x => {
		let newValue = x += ' World' // Hello World
		return newValue
	})
	// .then(welcome => {
	// 	let BigLetters = welcome.toUpperCase()
	// 	console.log(BigLetters);
	// })
	.then(ChangeLettersToUpper)
	.catch(error => console.error(error)) // handle
	.finally(() => {
		console.log("I'm done");
	})
