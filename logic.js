document.getElementById('numForm').addEventListener('submit', function (event) {
	event.preventDefault();
	let num = Math.ceil(Math.sqrt(document.getElementById('num').value));

	generateTable(num);
});

function generateTable(num) {
	let tableContainer = document.getElementById('tableContainer');
	let tableHTML = '<table>';

	// Generating table rows and columns
	for (let i = 0; i < num; i++) {
		tableHTML += '<tr>';
		for (let j = 0; j < num; j++) {
			tableHTML += '<td></td>';
		}
		tableHTML += '</tr>';
	}

	tableHTML += '</table>';
	tableContainer.innerHTML = tableHTML;
}
