
const display = document.getElementById("list");
let lists = JSON.parse(localStorage.getItem("list") || "[]");
// let display = document.getElementById('list')

function addItem() {
  lists.push({
    item: lists.length - 1 + 1,
    task: document.getElementById("add").value,
    createdDate: new Date(),
    completed: false,
  });
  loadData();
  localStorage.setItem("list", JSON.stringify(lists));
  document.getElementById("add").value ='';
  document.getElementById("add").focus();
}
document.querySelector("#btnAdd").addEventListener("click", addItem);

function loadData() {
  display.innerHTML = "";
  lists.forEach((item, index) => {
    display.innerHTML += `
    <li id="${index}" class="d-flex justify-content-between border-bottom border-3 mb-3">
    <input class="bruh form-check-input me-1" type="checkbox" onchange="completed(${index})" id="complete">
    <span>
    ${item.task}
    </span>
    <i onclick="deleteItem(${index})" class="btn fa-solid fa-trash-can"></i>
    </li>
    `;
  });
  console.table(lists);
}
loadData();

document.querySelector("#sort").addEventListener("click", () => {
  lists.sort((a, b) => {
    let fa = a.task.toLowerCase(),
      fb = b.task.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  loadData();
});

function deleteItem(id) {
  if (id > -1) {
    lists.splice(id, 1);
    localStorage.setItem("list", JSON.stringify(lists));
  }
  loadData();
}

function completed(id) {
    lists[id].completed = true
    localStorage.setItem("list", JSON.stringify(lists));
  }

for (let i=0; i < lists.length; i++) {
  console.log(lists[i].completed)
  if(lists[i].completed == true){
    document.getElementById('complete' + i).checked = true;
  }
}


// function sort