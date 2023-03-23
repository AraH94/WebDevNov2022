const [fullname, profession, gender, nationality, address, city, phone, email] = document.querySelectorAll('input');

// const gender = document.querySelectorAll('select');

const [save, search] = document.querySelectorAll('button');

const employeeList = document.querySelector('.employee-list')

// Save changes, add employee
save.addEventListener('click', () => {
	const newEmployee = {
		"id": id.value,
		"fullname": fullname.value,
		"profession": profession.value,
		"gender": gender.select,
		"nationality": nationality.value,
		"address": address.value,
		"city": city.value,
		"phone": phone.value,
		"email": email.value
	}
	console.log(newEmployee)
	sessionStorage.setItem('currentEmployee', newEmployee);


	let epmloyeeTable = document.getElementById('.table');
	for (let i = 0; i < epmloyeeTable.length; i++) {
		let employee = epmloyeeTable[i];
		let rowHtml = '<tr><td>' + employee.fullname + '</td><td>' + employee.profession + '</td><td>' + employee.gender + '</td><td>' + employee.nationality + '</td><td>' + employee.address + '</td><td>' + employee.city + '</td><td>' + employee.phone + '</td><td>' + employee.email + '</td></tr>';
		epmloyeeTable.innerHTML += rowHtml;
	}
	// employeeList.innerText = employee
})

search.addEventListener('click', async (e) => {
	while (employeeList.firstChild) {
		employeeList.removeChild(employeeList.firstChild)
	}
	console.log('Search Employee');
	console.log(e.key);
	console.log(e.target.value);

	let allEmployees = await employeeList(e.target.value);
	console.log(allEmployees);
	// displayProducts(allEmployees.employees);
	console.log(e.target.value == "");

	// When search is empty
	if (e.target.value == "") {
		let previousAllEmployees = await employeeList()
		// displayProducts(previousAllEmployees)
	}
})