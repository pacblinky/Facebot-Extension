document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("addPerson").addEventListener("submit", function(event) {
        event.preventDefault();
        insertPerson(document.getElementById("fname").value, document.getElementById("lname").value, document.querySelector("input[name='sex']:checked").value);
    });

    document.getElementById("personsJson_submit").addEventListener("click", function(event) {
        try {
            data = JSON.parse(document.getElementById("persons_json").value);
        } catch (e) {
            return console.error(e);
        }

        if(Array.isArray(data)){
            data.forEach(object => {
                if("fname" in object && "lname" in object && "gender" in object){
                    insertPerson(object.fname, object.lname, object.gender);
                }
            });
        }
        else {
            if("fname" in data && "lname" in data && "gender" in data) {
                insertPerson(data.fname, data.lname, data.gender);
            }
        }
    });
});


function insertPerson(fname, lname, gender){
    var personsTable = document.getElementById("personsTable")
    var newRow = personsTable.insertRow();
    var fnameCell = newRow.insertCell(0);
    var lnameCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);

    fnameCell.textContent = fname;
    lnameCell.textContent = lname;
    genderCell.textContent = gender;
}