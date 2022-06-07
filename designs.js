canvas = document.getElementById('pixelCanvas');
color = document.getElementById('colorPicker');

// create pixel grid using height and width inputs
function makeGrid() {
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener('mousedown', function() {
                cell.style.backgroundColor = color.value;
            })
        }
    }
}


// clear pixel grid
function resetGrid() {
    $('#pixelCanvas').html('');
}

// reset and create a new pixel grid
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    resetGrid();
    makeGrid();
});
