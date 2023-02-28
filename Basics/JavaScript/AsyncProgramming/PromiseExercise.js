// let PromiseUsers1 = new Promise((resolve, reject) => {
// 	resolve([1, 2, 3])
// });

// console.log(PromiseUsers1);

// let PromiseUsers2 = new Promise((resolve, reject) => {
// 	resolve([4, 5, 6])
// });

// console.log(PromiseUsers2);

// PromiseUsers1.then(data =>{
// 	console.log(data);
// });

// PromiseUsers2.then(data =>{
// 	console.log(data);
// });

// let GetResults = Promise.all([PromiseUsers1, PromiseUsers2]); // [1,2,3,4,5,6]
// GetResults.then(allData => {
// 	console.log(allData);
// });

// let PromiseMe = new Promise((resolve, reject) => {
// console.log('Hello World');
// 	resolve('Hello');
// });

// PromiseMe
// 	.then(response => {
// 		console.log(response);
// 	});

// PromiseMe.then(function (data) {
// 	console.log(data);
// });

function GetNewsData(site) {
	return new Promise((resolve, reject) => {

		if (site !== null && site !== '') {
			resolve(site)
		} else {
			reject('Hello')
		}
	})
}

GetNewsData('')
	.then(news => {
		console.log(news);
	})
	.catch(err => console.log(err))
	.finally(() => {
		console.log('Done');
	})