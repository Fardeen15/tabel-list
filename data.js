// var rIndex;
// var table = document.getElementById("table");

// function addHtmlTableRow() {
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
//     var age = document.getElementById("age").value;
//      cell1.innerHTML = fname;
//      cell2.innerHTML = lname;
//      cell3.innerHTML = age;
//     selectedRowToInput();
// }

// function selectedRowToInput() {
//     for (var i = 0; i < table.rows.length; i++) {
//         table.rows[i].onclick = function () {
//             rIndex = this.rowIndex;
//             document.getElementById("fname").value = this.cells[0].innerHTML;
//             document.getElementById("lname").value = this.cells[1].innerHTML;
//             document.getElementById("age").value = this.cells[2].innerHTML;
//         }
//     }
// }
// selectedRowToInput();

// function editHtmlTbleSelectedRow() {
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
//     var age = document.getElementById("age").value;
//     table.rows[rIndex].cells[0].innerHTML = fname;
//     table.rows[rIndex].cells[1].innerHTML = lname;
//     table.rows[rIndex].cells[2].innerHTML = age;
// }

// function removeSelectedRow() {
//     table.deleteRow(rIndex);
//     document.getElementById("fname").value = "";
//     document.getElementById("lname").value = "";
//     document.getElementById("age").value = "";

// }
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
    <tr >
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    </tr>
    `
    for(var i = 0; i < nameArr.length; i++){
        table.innerHTML += `
        <tr >
        <td>${nameArr[i]}</td>
        <td>${secondname[i]}</td>
        <td>${Age[i]}</td>
        <td><button onclick="removeSelectedRow(${i})">Remove</button></td>
        <td><button onclick="editHtmlTbleSelectedRow(${i})">Edit</button></td>
        </tr>`
    }
}


function removeSelectedRow(a){
    console.log(a)
nameArr.splice(a,1);
addData()
}
var index;
function editHtmlTbleSelectedRow(b){
    document.getElementById("fname").value = nameArr[b];
    document.getElementById("lname").value = secondname[b]
    document.getElementById("age").value = Age[b]
    index = b
    
    // console.log(b)
    // console.log(nameArr[b],secondname[b],Age[b])
    // var firstname = document.getElementById("fname"[b]).value
}


function updateRow(c) {
    table.innerHTML += `
    <tr >
    <td>${nameArr[index]}</td>
    <td>${secondname[index]}</td>
    <td>${Age[index]}</td>
    <td><button onclick="removeSelectedRow(${index})">Remove</button></td>
    <td><button onclick="editHtmlTbleSelectedRow(${index})">Edit</button></td>
    </tr>`

// editHtmlTbleSelectedRow(c).innerHTML = ""
console.log(index)
}





// editHtmlTbleSelectedRow()

// var students = [
//     {
//         name: "fardeen",
//         class: 10,
//         age: 15,
//     },
//     {
//         name: "dilawar",
//         class: 10,
//         age: 16,
//     },
//     {
//         name: "ghori",
//         class: 10,
//         age: 14,
//     },
// ]
// function editRow() {
//    document.write(`
//         <form>
//      Name : <input type="text" ${id = "name"} ><br><br>
//      Class : <input type="text" ${id ="class"}><br><br>
//      Age : <input type="text" ${id = "age"}><br><br>
//      <input type="button" value="update" title="update" onclick="update()">
//     </form>
//     `)
// }

// document.write(`
// <table>
//     <th>name</th>
//     <th>class</th>
//     <th>age</th>
//     <tr>
//         <td>${students[0].name}</td>
//         <td>${students[0].class}</td>
//         <td>${students[0].age}</td>
//         <td><input type="button" value="edit" title="edit" onclick="editRow()"></td>
//         <td><input type="button" value="delete" title="delete" onclick=""></td></tr>
//     <tr>
//         <td>${students[1].name}</td>
//         <td>${students[1].class}</td>
//         <td>${students[1].age}</td>
//         <td><input type="button" value="edit" title="edit" onclick="editRow()"></td>
//         <td><input type="button" value="delete" title="delete" onclick=""></td>
//     </tr>
//     <tr>
//         <td>${students[2].name}</td>
//         <td>${students[2].class}</td>
//         <td>${students[2].age}</td>
//         <td><input type="button" value="edit" title="edit" onclick="editRow()"></td>
//         <td><input type="button" value="delete" title="delete" onclick=""></td>
//     </tr>
// </table>
// `)
