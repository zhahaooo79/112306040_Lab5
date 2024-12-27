document.getElementById("gradeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) return;

    const tableBody = document.querySelector("#gradesTable tbody");
    const newRow = document.createElement("tr");
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    newRow.innerHTML = `<td>${mathGrade}</td><td>${englishGrade}</td><td>${average}</td>`;
    tableBody.appendChild(newRow);

    updateAverages();
});

function updateAverages() {
    const rows = document.querySelectorAll("#gradesTable tbody tr");
    let totalMath = 0, totalEnglish = 0, totalAverage = 0;

    rows.forEach(row => {
        const math = parseFloat(row.cells[0].textContent);
        const english = parseFloat(row.cells[1].textContent);
        const avg = parseFloat(row.cells[2].textContent);

        totalMath += math;
        totalEnglish += english;
        totalAverage += avg;
    });

    const rowCount = rows.length;
    document.getElementById("mathAverage").textContent = (totalMath / rowCount).toFixed(2);
    document.getElementById("englishAverage").textContent = (totalEnglish / rowCount).toFixed(2);
    document.getElementById("overallAverage").textContent = (totalAverage / rowCount).toFixed(2);
}
