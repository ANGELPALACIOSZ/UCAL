const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(currentMonth, currentYear);
});

function renderCalendar(month, year) {
    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    document.getElementById("monthYear").textContent = `${monthNames[month]} ${year}`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cellText = document.createTextNode(date);
                if (date === 3 || date === 13 || date === 18 || date === 27) {
                    cell.classList.add("highlight");
                }
                cell.appendChild(cellText);
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function prevMonth() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    renderCalendar(currentMonth, currentYear);
}
