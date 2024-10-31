const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
//   let price=document.querySelectorAll('.price');
// 	price=Array.from(price);
// 	let sum=price.reduce((total,price)=>
// 	total+Number(price.innerText),0);

// 	let table=document.querySelector('table');
// 	let row=document.createElement('tr');
// 	let cell=document.createElement('td');
// 	cell.colspan=2;
// 	cell.innerText=`Total: ${sum}`;
// 	row.appendChild(cell);
// 	table.appendChild(row);
// };

function insertCell(sum){
	let table=document.querySelector('table');
	let row=document.createElement('tr');
	let cell=document.createElement('td');
	cell.colspan=2;
	cell.id='ans';
	cell.innerText=`table: ${sum}`;
	row.appendChild(cell);
	table.appendChild(row);
	
}

const getSum = () => {
let price=document.querySelectorAll('.price');
	price=Array.from(price);
	let sum=price.reduce((total,price)=>
	total+Number(price.innerText),0);
	insertCell(sum);
}

getSumBtn.addEventListener("click", getSum);

