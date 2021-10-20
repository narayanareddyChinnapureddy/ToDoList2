var form = document.getElementById('form');
var listGroup = document.getElementById('list-group');

// form submit event
form.addEventListener('submit', addName);

// removeName
listGroup.addEventListener('click', removeName);

//add Name

function addName(e) {
	e.preventDefault();

	//getting the input value
	var newName = document.getElementById('inputElement').value;

	//creating a new li element
	var li = document.createElement('li');

	//adding class to li
	li.classList.add('list-item');

	//creating texnode to append it to li
	li.appendChild(document.createTextNode(newName));

	// creating delete button
	var deleteBtn = document.createElement('button');

	//adding class to delete button
	deleteBtn.className = 'deleteBtn';

	// inserting the text node to button
	deleteBtn.appendChild(document.createTextNode('delete'));

	// append button to li
	li.appendChild(deleteBtn);

	// adding li to listGroup
	listGroup.appendChild(li);

	// clearing the input field
	document.getElementById('inputElement').value = '';
}

// remove name
function removeName(e) {
	if (e.target.classList.contains('deleteBtn')) {
		if (confirm('Are you sure ?')) {
			var li = e.target.parentElement;
			listGroup.removeChild(li);
		}
	}
}
