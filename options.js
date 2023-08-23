var persons

document.addEventListener('DOMContentLoaded', function () {
    initPersons()

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

function initPersons() {
    /*chrome.storage.local.get("persons", result => {
        if (chrome.runtime.lastError) {
            chrome.storage.local.set({persons: ["hello","asd"]})
        }
        else {
            persons = result.persons
        }
    /})
    */
    const key = 'myKey';
    const value = { name: 'my value' };
    chrome.storage.local.set({key: value}, function() {
        console.log("stored")
    });

    chrome.storage.local.get(null, function(result) {
        console.log(result.key)
    })
}


function insertPerson(fname, lname, gender) {
    var personsTable = document.getElementById("personsTable")
    var newRow = personsTable.insertRow();
    var fnameCell = newRow.insertCell(0);
    var lnameCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);
    var actionsCell = newRow.insertCell(3);

    fnameCell.textContent = fname;
    lnameCell.textContent = lname;
    genderCell.textContent = gender;

    delete_btn = document.createElement("button");
    delete_btn.classList.add("btn", "btn-danger");
    delete_btn.innerText = "Delete";
    delete_btn.addEventListener("click", function(event) {
        console.log("hello")
    });

    actionsCell.appendChild(delete_btn)

}