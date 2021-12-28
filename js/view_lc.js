function renderHello() {
	// Template
	var template = document.getElementById('template').innerHTML;
	
	// Option
	var selectElement = document.querySelector('#select1');
	var output = selectElement.value;
	
	// rendering
	var rendered = Mustache.render(template, { name: output});
	document.getElementById('target').innerHTML = rendered;
}