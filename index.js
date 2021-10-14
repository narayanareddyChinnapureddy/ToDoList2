function onNameAdd() {
	userName = document.getElementById('inputElement').value;

	appendNameToList(userName);
	document.getElementById('inputElement').value = '';
}

function appendNameToList(userName) {
	// creating elements
	listItem = document.createElement('li');
	listDiv = document.createElement('div');
	// adding class to list item
	listItem.classList.add('list-item');

	nameDiv = document.createElement('div');
	deleteBtn = document.createElement('button');

	nameDiv.innerHTML = userName;
	deleteBtn.innerHTML = 'Delete';
	deleteBtn.classList.add('deleteBtn');

	deleteBtn.addEventListener('click', function () {
		this.parentElement.parentElement.remove();
	});

	// get the list group
	listGroup = document.getElementById('list-group');
	listGroup.appendChild(listItem);
	listItem.appendChild(listDiv);
	listDiv.append(nameDiv, deleteBtn);
}
