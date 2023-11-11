let data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'John ', email: 'john@example.com' },
  { id: 4, name: ' Smith', email: 'smith@example.com' },
  { id: 5, name: 'John harry', email: 'harry@example.com' },
  { id: 6, name: 'Lannister', email: 'lannister@example.com' },
];

function readAll() {
  localStorage.setItem('object', JSON.stringify(data));
  var tabledata = document.querySelector('.data_table');

  var object = localStorage.getItem('object');
  var objectdata = JSON.parse(object);
  var elements = '';

  objectdata.map(
    (record) =>
      (elements += `<tr> 
    <td>${record.name}</td>
      <td>${record.email}</td>
      <td>
      <button class="edit" onClick={edit(${record.id})}>Edit</button>
      <button class="delete" onClick={delet(${record.id})}>Delete</button></td>
  <tr/>`)
  );
  tabledata.innerHTML = elements;
}

// create the obj
function create() {
  document.querySelector('.create_form').style.display = 'block';
  document.querySelector('.add_div').style.display = 'none';
}

// delete the obj

function delet(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}

// add the obj
function add() {
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;

  var newObj = { id: 7, name: name, email: email };
  data.push(newObj);

  document.querySelector('.create_form').style.display = 'none';
  document.querySelector('.add_div').style.display = 'block';
  readAll();
}

function edit(id) {
  document.querySelector('.update_form').style.display = 'block';
  var obj = data.find((rec) => rec.id === id);
  document.querySelector('.uname').value = obj.name;
  document.querySelector('.uemail').value = obj.email;
}

function update() {
  var id = parseInt(document.querySelector('.id').value);
  var name = document.querySelector('.uname').value;
  var email = document.querySelector('.uemail').value;
  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, name, email };
  document.querySelector('.update_form').style.display = 'none';
  readAll();
}
