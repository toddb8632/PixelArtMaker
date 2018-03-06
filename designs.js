//***Note: I had to define the variables outside of the document ready function
const submitButton = $('form input:submit');
const colorWell = $('#colorPicker');
const gridTable = $('#pixelCanvas');
let paintBrushColor = '#000000';

$(document).ready(function(){
  //call makeGrid() function to set default 10 x 10 grid
  makeGrid()

// When size is submitted by the user, call makeGrid()
  submitButton.click(function(){
  //clear existing canvas
    gridTable.empty();
  //prevent form from reseting with default values
    event.preventDefault();
  //call the makeGrid() function
    makeGrid();
  });

  //function to make the rows and columns of the grid
  function makeGrid() {
    var gridHeight = $('#inputHeight').val();
    var gridWidth = $('#inputWidth').val();
    if (gridHeight > 50 || gridWidth > 50){
      alert("Grid to big! Grid Height and Grid Width each must be 50 pixels or less");
      } else {
    //loop to create rows based on gridHeight value
    //this ested loop will create one row add the cells and then repeat for number of rows
      for (var row = 0; row < gridHeight; row ++){
        //append <tr> row element to <table> element
        $('#pixelCanvas').append('<tr></tr>');
        //loop to create cells based on gridWidth value
        for (var column = 0; column < gridWidth; column ++){
        //append <td> cell element to last child of the table the current row
          $('table tr:last-child').append('<td></td>');
        }
       }
     }
   };

  //change event to set color value to that selected with color picker
  colorWell.change(function(){
    colorWell.value = event.target.value;
    //call select() to select the text content of the color input if the control is implemented as a text field (this has no effect if a color picker interface is provided instead).
    colorWell.select();
    paintBrushColor = colorWell.value;
  });


//add click event to grid(table) so that css background color is changed to color selected
  $('table').on('click', 'td', function(){
  //alert("I'm working")
    $(this).css('backgroundColor', paintBrushColor);
  });
});
