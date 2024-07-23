document.getElementById('numForm').addEventListener('submit', function (event) {
	event.preventDefault();
	let age = document.getElementById('age').value;

	let lifespan = document.getElementById('lifespan').value;
	if (age > lifespan) {
		lifespan = age; // Dancing with death be like
	}

	let num = Math.ceil(Math.sqrt(lifespan));

	generateTable(num, age, lifespan);
});

function generateTable(num, age, lifespan) {
	let tableContainer = document.getElementById('tableContainer');
	let tableHTML = '<table>';

	for (let i = 0; i < num; i++) {
		tableHTML += '<tr>';
		for (let j = 0; j < 10; j++) {
			// Ensure exactly 10 columns
			let cells = i * 10 + j; // Calculate the current cell number

			if (age > cells) {
				tableHTML += `<td style="background-color: black; color: white">${cells}</td>`;
			} else if (age == cells) {
				tableHTML += `<td style="background-color: grey">${cells}</td>`;
			} else if (lifespan >= cells) {
				tableHTML += `<td>${cells}</td>`;
			}
		}
		tableHTML += '</tr>';
	}

	tableHTML += '</table>';
	tableContainer.innerHTML = tableHTML;
}
