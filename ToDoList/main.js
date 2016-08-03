function addTask() {
	// Get User Data //
	var userText = document.getElementById('userTask').value

	// Create Tags //
	var newLi = document.createElement('li')
	
	// Create TextNode //
	var liText = document.createTextNode(userText)

	// Select HTML to Add Later //
	var currentTasks = document.getElementById('currentTasks')

	// Add Text to Li //
	newLi.appendChild(liText)

	// Add Li to Ol //
	currentTasks.appendChild(newLi)

}


