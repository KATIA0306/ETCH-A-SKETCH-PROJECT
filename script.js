
for (let i = 0; i < 20; i++) {
  let row = createRow();
  for (let k = 0; k < 20; k++) {
    createElement(row);
  };
};

function createRow() {
  let parent = document.getElementById('parent');
  let row = document.createElement('div');
  row.className = "row";
  parent.appendChild(row);
  return row;
}

function createElement(parent) {
  let elem = document.createElement('div');
  elem.className = "elem";
  parent.appendChild(elem);
}
