document.getElementById('generate-btn').addEventListener('click', function() {
    const monthInput = parseInt(document.getElementById('month-input').value) - 1;
    const yearInput = parseInt(document.getElementById('year-input').value);

    if (isNaN(monthInput) || isNaN(yearInput) || monthInput < 0 || monthInput > 11) {
        alert('Введіть коректні дані!');
        return;
    }

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    document.getElementById('calendar-title').textContent = `${monthNames[monthInput]}, ${yearInput}`;

    const firstDay = new Date(yearInput, monthInput, 1);
    let startDayOfWeek = firstDay.getDay(); 
    if (startDayOfWeek === 0) {
        startDayOfWeek = 7; 
    }

    const daysInMonth = new Date(yearInput, monthInput + 1, 0).getDate();

    let tableHtml = '<table><thead><tr>';
    const daysHeaders = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    daysHeaders.forEach(day => {
        tableHtml += `<th>${day}</th>`;
    });
    tableHtml += '</tr></thead><tbody><tr>';

    for (let i = 1; i < startDayOfWeek; i++) {
        tableHtml += '<td></td>';
    }

    let currentDayOfWeek = startDayOfWeek;
    for (let day = 1; day <= daysInMonth; day++) {
        tableHtml += `<td>${day}</td>`;
        
        if (currentDayOfWeek === 7 && day !== daysInMonth) {
            tableHtml += '</tr><tr>';
            currentDayOfWeek = 1;
        } else {
            currentDayOfWeek++;
        }
    }

    while (currentDayOfWeek <= 7 && currentDayOfWeek !== 1) {
        tableHtml += '<td></td>';
        currentDayOfWeek++;
    }

    tableHtml += '</tr></tbody></table>';

    document.getElementById('calendar-table-wrapper').innerHTML = tableHtml;
});