// function PrintMyName() {
// code here
// console.log('Hello function')
// }

function PrintMyName(name) {
	// function parameter
	console.log(name)
}

PrintMyName(); // call back function
PrintMyName('Michael'); // call back function
PrintMyName('Ara')

// NettoSalary
function SalaryCalculator(bruto) {
	var tax = 40;
	var result1 = bruto / 100 * tax;
	var result2 = bruto - result1;
	console.log(`Tax is ${result1}\nNetto Salary is ${result2}`);
}
SalaryCalculator(3000);

function GetSumOfNumbers(n1, n2) {
	var result = n1 + n2;
	console.log(`Sum of these 2 numbers is ${result}`)
}
GetSumOfNumbers(5, 6);

// function ServeNumber1(){
// 	console.log(1)
// }

// function ServeNumber2(){
// 	console.log(3)
// }

// const result = ServeNumber1() + ServeNumber2()
// console.log(result)

function GetFirstName() {
	return "Michael"
}

function GetLastName() {
	return "Jackson"
}

// const fullname = GetFirstName() + GetLastName()
function GetFullName() {
	return GetFirstName() + GetLastName()
}
console.log(GetFullName());

// function NettSalarayCalculator(bruto, tax){
// 	const taxAmount = (bruto/100)*tax;
	// return bruto-taxAmount // netto amount
// 	console.log(bruto-taxAmount, "hello")
// }
// const nettoResult = NettSalarayCalculator(3000, 40)
// console.log(nettoResult)


