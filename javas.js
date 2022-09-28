let addbutton = document.querySelector('.AddButton');
let ol = document.querySelector('.ol');
let li = document.createElement('li');
let input = document.querySelector ('.input');
li.className = 'elem'; 

addbutton.onclick = function addElem(){
	if (input.value === '') return
	let li = document.createElement('li');
	let deletebutton = document.createElement('button'); 
	li.innerHTML = input.value;
	li.className = 'elem';
	ol.append(li);
	input.value = '';

	deletebutton.className = 'deletebutton';
	deletebutton.textContent = 'x';
	li.appendChild(deletebutton);

	deletebutton.onclick = function(){
		ol.removeChild(li)
	}
	
}
