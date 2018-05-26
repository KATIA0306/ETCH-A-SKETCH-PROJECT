

let rowsNumber = 16;


const createGrid = (rowsNumber) => {
 for (let i = 0; i < rowsNumber; i++) {
   for (let j = 0; j < rowsNumber; j++) {

     let parent = document.getElementById('parent');
     let grid = document.createElement('div');
     grid.className = "grid";
     grid.setAttribute('style', 'width: ' + (100/rowsNumber) + '%; height: ' + (100/rowsNumber) + '%');
     parent.appendChild(grid);
   }
 }
}

createGrid(16);
