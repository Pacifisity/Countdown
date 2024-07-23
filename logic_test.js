document
	.getElementById('biologyForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		let birthday = document.getElementById('birthday').value;

		let sex = document.getElementsByName('sex');

		if (sex[0].checked) {
			lifespan = 73;
		} else {
			lifespan = 80;
		}

		timeSpent = timeSpentCalculator(birthday, dateGenerator());

		age = timeSpent[0];

		let rows = Math.ceil((lifespan + 1) / 10);

		generateTable(rows, age, lifespan);
	});

function generateTable(rows, age, lifespan) {
	let tableContainer = document.getElementById('tableContainer');
	let tableHTML = '<table>';

	for (let i = 0; i < rows; i++) {
		tableHTML += '<tr>';
		for (let j = 0; j < 10; j++) {
			let cells = i * 10 + j;

			if (age > cells) {
				tableHTML += `<td class="past">${cells}</td>`;
			} else if (age == cells) {
				tableHTML += `<td class="current">${cells}</td>`;
			} else if (lifespan >= cells) {
				tableHTML += `<td class="future">${cells}</td>`;
			}
		}
		tableHTML += '</tr>';
	}

	tableHTML += '</table>';
	tableContainer.innerHTML = tableHTML;
}

function dateGenerator() {
	let currentDate = new Date();

	let day = currentDate.getDate();
	let month = currentDate.getMonth() + 1;
	let year = currentDate.getFullYear();

	// Pad the month and day with leading zeros if necessary
	if (month < 10) {
		month = '0' + month;
	}

	if (day < 10) {
		day = '0' + day;
	}

	// Create the formatted date string in yyyy-mm-dd format to work with the birthday collection form
	let formattedDate = year + '-' + month + '-' + day;

	return formattedDate;
}

function timeSpentCalculator(birthday, current) {
	birthDate = birthday.split('-');
	currentDate = current.split('-');

	yearsSpent = currentDate[0] - birthDate[0];

	monthsSpent = currentDate[1] - birthDate[1];
	if (monthsSpent < 0) {
		monthsSpent = monthsSpent + 12;
		yearsSpent = yearsSpent - 1;
	}

	daysSpent = currentDate[2] - birthDate[2];
	if (daysSpent < 0) {
		daysSpent = daysSpent + 30;
		monthsSpent = monthsSpent - 1;
	}

	timeSpent = [yearsSpent, monthsSpent, daysSpent];

	return timeSpent;
}
