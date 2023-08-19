document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("addPerson").addEventListener("submit", function(event) {
        event.preventDefault();
        insertPerson(document.getElementById("fname").value, document.getElementById("lname").value, document.querySelector("input[name='sex']:checked").value)
    });
});


function insertPerson(fname, lname, gender){
    var personsTable = document.getElementById("personsTable")
    var newRow = personsTable.insertRow();
    var fnameCell = newRow.insertCell(0);
    var lnameCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);

    fnameCell.textContent = fname
    lnameCell.textContent = lname
    genderCell.textContent = gender
}