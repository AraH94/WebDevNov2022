const ParentElement = document.querySelector('.container');

// Element generator
const g = tagName => document.createElement(tagName);
// TextNode generator
const t = content => document.createTextNode(content);

// Table, thead, tbody
const table = g('table');
const thead = g('thead');
const tbody = g('tbdoy');

// thead
const thead_tr = g('tr');
// th
const th1 = g('th');
th1.appendChild(t('#')); // Text inserted

const th2 = g('th');
th2.appendChild(t('Username')); // Text inserted

const th3 = g('th');
th3.appendChild(t('Password')); // Text inserted

// Append 3 th into tr
// thead_tr.appendChild(th1);
// thead_tr.appendChild(th2);
// thead_tr.appendChild(th3);
// OR a shorter and more dynamic way
const th_Elements = [th1, th2, th3];
th_Elements.forEach(th => thead_tr.appendChild(th));

thead.appendChild(thead_tr); // append tr into thead

table.appendChild(thead);

// Option 1
function AddDataToBody(id, username, password) {
	const tbody_tr = g('tr');

	// td
	const td1 = g('td');
	td1.appendChild(t(id))
	const td2 = g('td');
	td2.appendChild(t(username))
	const td3 = g('td');
	td3.appendChild(t(password))

	const tdElements = [td1, td2, td3];
	tdElements.forEach(td => tbody_tr.appendChild(td));

	return tbody_tr
}
// Option 2
// tbody
// const tbody_tr = g('tr');

// td
// const td1 = g('td');
// td1.appendChild(t('1'));
// const td2 = g('td');
// td2.appendChild(t('Root'));
// const td3 = g('td');
// td3.appendChild(t('Root123'));

// const tdElements = [td1, td2, td3];
// tdElements.forEach(td => tbody_tr.appendChild(td));

// Append tr into tbody
// tbody.appendChild(tbody_tr);


const data1 = AddDataToBody(1, 'root1', 'root123');
const data2 = AddDataToBody(2, 'root2', 'root123');
const data3 = AddDataToBody(3, 'root3', 'root123');
const data4 = AddDataToBody(4, 'root4', 'root123');
const datas = [data1, data2, data3, data4];
datas.forEach(data => tbody.appendChild(data));


//tbody need to be append into table
table.appendChild(tbody);

// Append table in to container
ParentElement.appendChild(table);
