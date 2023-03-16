/*
<table>
	<thead>
		<tr>
			<th>#</th>
			<th>username</th>
			<th>password</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>root</td>
			<td>toor123</td>
		</tr>
	</tbody>
</table>
*/

// in js you need to use createElement() and appendChild()

// Basic way
const ParentElement = document.querySelector('.container');

// 1. Table Parent Element
const table = document.createElement('table');

// Child-Parent Elements of table
let tblHead = document.createElement('thead');
let tblBody = document.createElement('tbody');

// Child of thead
const TrOfThead = document.createElement('tr');


// Child of tr in thead
const ThOfTrInThead1 = document.createElement('th');
// Insert text into th
// ThOfTrInThead1.innerText="#"; // Option 1 OR
ThOfTrInThead1.appendChild(document.createTextNode('#')); // Option 2: this method way is the fastest one

const ThOfTrInThead2 = document.createElement('th');
ThOfTrInThead1.appendChild(document.createTextNode('Username'));

const ThOfTrInThead3 = document.createElement('th');
ThOfTrInThead1.appendChild(document.createTextNode('Password'));


// Append TH elements into Tr of thead
TrOfThead.appendChild(ThOfTrInThead1);
TrOfThead.appendChild(ThOfTrInThead2);
TrOfThead.appendChild(ThOfTrInThead3);

// Append Tr of thead into thead element
tblHead.appendChild(TrOfThead);

// END OF THEAD

// TBODY
const Tr_Of_Tbody = document.createElement('tr');

const Td_Of_Tr_inTbody1 = document.createElement('td');
Td_Of_Tr_inTbody1.appendChild(document.createTextNode('1'));

const Td_Of_Tr_inTbody2 = document.createElement('td');
Td_Of_Tr_inTbody1.appendChild(document.createTextNode('root'));

const Td_Of_Tr_inTbody3 = document.createElement('td');
Td_Of_Tr_inTbody1.appendChild(document.createTextNode('root123'));

Tr_Of_Tbody.appendChild(Td_Of_Tr_inTbody1);
Tr_Of_Tbody.appendChild(Td_Of_Tr_inTbody2);
Tr_Of_Tbody.appendChild(Td_Of_Tr_inTbody3);

// TR appended into tbody
tblBody.appendChild(Tr_Of_Tbody);

// Append thead into table
table.appendChild(tblHead);
table.appendChild(tblBody);

ParentElement.appendChild(table);

