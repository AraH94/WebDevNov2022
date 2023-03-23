const addEmployeeBtn = document.querySelector('.addEmployee');
const searchEmployeeBtn = document.querySelector('.searchEmployee')
const searchColumn = document.querySelector('#search-column')
const [fullname, profession, nationality, address, city, phone, email] = document.querySelectorAll('input');

const result = document.querySelector('.result')

const GetLocalStorageEmployees = () => JSON.parse(localStorage.getItem('employee'));

const employeeList = document.querySelector('.employee-list')

addEmployeeBtn.addEventListener('click', (e) => {
	console.log('Hello');

	var e = document.getElementById("gender");
	var value = e.value;

	const newEmployee = {
		"fullname": fullname.value,
		"profession": profession.value,
		"gender": value,
		"nationality": nationality.value,
		"address": address.value,
		"city": city.value,
		"phone": phone.value,
		"email": email.value
	}
	console.log(newEmployee)

	let tempEmployee = GetLocalStorageEmployees();
	if (newEmployee) {
		tempEmployee.push(newEmployee)
		localStorage.setItem('employee', JSON.stringify(tempEmployee))
	}

	result.innerHTML += `<tr>
		<td>#</td>
		<td>${newEmployee.fullname}</td>
		<td>${newEmployee.profession}</td>
		<td>${newEmployee.gender}</td>
		<td>${newEmployee.nationality}</td>
		<td>${newEmployee.address}</td>
		<td>${newEmployee.city}</td>
		<td>${newEmployee.phone}</td>
		<td>${newEmployee.email}</td>
		</tr>
	`;

	deletePrevious();

	e.preventDefault;
})

// When employee added, delete form to add a new user
function deletePrevious(){
		document.getElementById('fullname').value = "";
		document.getElementById('profession').value = "";
		document.getElementById('gender').value = "";
		document.getElementById('nationality').value = "";
		document.getElementById('address').value = "";
		document.getElementById('city').value = "";
		document.getElementById('phone').value = "";
		document.getElementById('email').value = "";
}

document.addEventListener('DOMContentLoaded', () => {
	let employees = GetLocalStorageEmployees();
	console.log(employees);
	if (employees === null) {
		localStorage.setItem('employee', '[]')
	}else{
		employees.forEach(resultEmp => {
			result.innerHTML += `<tr>
			<td>#</td>
			<td>${resultEmp.fullname}</td>
			<td>${resultEmp.profession}</td>
			<td>${resultEmp.gender}</td>
			<td>${resultEmp.nationality}</td>
			<td>${resultEmp.address}</td>
			<td>${resultEmp.city}</td>
			<td>${resultEmp.phone}</td>
			<td>${resultEmp.email}</td>
			</tr>
		`;
		})
	}
})

searchEmployeeBtn.addEventListener('click', (e) => {
	while (result.firstChild) {
		result.removeChild(result.firstChild)
	}

	var e = document.getElementById("select-column");
	var selectedCol = e.value;
	console.log(selectedCol);
	
	let allEmployees = GetLocalStorageEmployees();
	console.log(allEmployees);

	let employeeResult = allEmployees.filter(employee => {
		let str = searchColumn.value.toLowerCase()
		return employee[selectedCol.toLowerCase()].match(/searchColumn.value.toLowerCase()/) // select column is in UpperCase, so we have to convert it first to lowercase
	});

	// let employeeResult = allEmployees.filter(employee => {
	// 	return employee.x.includes(searchColumn.value);
	// });

	employeeResult.forEach(resultEmp => {
		result.innerHTML += `<tr>
		<td>#</td>
		<td>${resultEmp.fullname}</td>
		<td>${resultEmp.profession}</td>
		<td>${resultEmp.gender}</td>
		<td>${resultEmp.nationality}</td>
		<td>${resultEmp.address}</td>
		<td>${resultEmp.city}</td>
		<td>${resultEmp.phone}</td>
		<td>${resultEmp.email}</td>
		</tr>
	`;
	})
	console.log(employeeResult, "result");

	e.preventDefault;
});

const deleteBtn = document.querySelector('.delete');

// Delete the last person in table
deleteBtn.addEventListener('click', () =>{
	const deleteEmployee = GetLocalStorageEmployees()
	deleteEmployee.pop()

	localStorage.setItem('employee',JSON.stringify(deleteEmployee));

	window.location.reload();
})
