//variable declarations
const colorPicker = document.getElementById("colorPicker");
const pixelTable = document.querySelector("#pixelCanvas");


//define grid width and heights
let gridHeight, gridWidth;


//draw the grid when Submit is clicked or Enter/Return key is pressed
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});


//Draws the grid based on the user input for grid height and width
function makeGrid() {

  //clear the existing table rows
  while (pixelTable.hasChildNodes()) {
    pixelTable.removeChild(pixelTable.lastChild);
}


  //get the user input values for grid height and grid width
  gridHeight = document.getElementById("inputHeight").value;
  gridWidth = document.getElementById("inputWidth").value;


  //draw table grid and add event listener for each cell
  for (let i = 0; i < gridHeight; i++) {
    let row = pixelTable.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);


      //to change background color when user clicks
      cell.addEventListener("click", function(event) {
        event.preventDefault();
        cell.style.backgroundColor = colorPicker.value;
      });


      //to remove the existing color when user double clicks
      cell.addEventListener("dblclick", function(event){
        event.preventDefault();
      	cell.style.backgroundColor = "";
      });
    }
  }
}