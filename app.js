const entryForm = document.getElementById("entryForm");
const items = document.getElementById("items");
const itemSubmit = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

function addItem(e) {
  e.preventDefault();

  const newItem = items.value;
  // validate input value
  if (newItem === "") {
    alert("Please Enter an Item");
    return;
  }

  const li = createLi("item", newItem);
  itemList.appendChild(li);
  itemList.value = "";
}

entryForm.addEventListener("submit", addItem);

function createLi(classes, newItem) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  li.className = classes;
  const icon = createIcon("fa fa-close");
  li.appendChild(icon);
  return li;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
