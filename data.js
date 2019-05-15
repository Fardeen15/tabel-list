var nameArr = []
var secondname = []
var Age = []


var table = document.getElementById("table");

function addHtmlTableRow() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    nameArr.push(fname);
    secondname.push(lname);
    Age.push(age);
    table.innerHTML = ""
    addData()
}


function addData() {
    table.innerHTML = `
    <tr>
    <th>s.no</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    </tr>
    `
    for (var i = 0; i < nameArr.length; i++) {
        table.innerHTML += `
        <tr >
        <td>${i + 1}</td>
        <td>${nameArr[i]}</td>
        <td>${secondname[i]}</td>
        <td>${Age[i]}</td>
        <td><button onclick="removeSelectedRow(${i})" class=" btn-outline-secondary jsBtn">Remove</button></td>
        <td><button onclick="editHtmlTbleSelectedRow(${i})" class=" btn-outline-secondary jsBtn">Edit</button></td>
        </tr>`
    }

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}


function removeSelectedRow(a) {
    console.log(a)
    console.log(nameArr)

    nameArr.splice(a, 1);
    secondname.splice(a, 1);
    Age.splice(a, 1);
    table.innerHTML = ""

    addData()
}
var index;
function editHtmlTbleSelectedRow(b) {
    document.getElementById("fname").value = nameArr[b];
    document.getElementById("lname").value = secondname[b]
    document.getElementById("age").value = Age[b]
    index = b
    document.getElementById("updateBtn").removeAttribute("disabled")
    document.getElementById("addBtn").setAttribute("disabled",true)
    // console.log(b)
    // console.log(nameArr[b],secondname[b],Age[b])
    // var firstname = document.getElementById("fname"[b]).value
}


function updateRow() {
    index;
    console.log(index)
    var name = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;


    document.getElementById("updateBtn").setAttribute("disabled",true)
    document.getElementById("addBtn").removeAttribute("disabled")

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";

    nameArr.splice(index, 1, name)
    secondname.splice(index, 1, lname)
    Age.splice(index, 1, age)
    addData()
}
