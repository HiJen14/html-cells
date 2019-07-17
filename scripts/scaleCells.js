/*Script to rock the cells. Or scale them!*/
/******************************************/

    /*window.onload = function myFunction()
    {
        var cellID = document.getElementById("cell1");
        console.log(cellID.outerHTML);
    };*/

var cellData = new Array(3);

function InitializeCells(totalMainCells, cellsOnRow) 
{
    //Initialise array in array
    for (var i = 0; i < cellData.length; i++) 
    {
        cellData[i] = new Array(totalMainCells);
    }
    
    var percentageOfElement = 100 / totalMainCells;
    
    var biggestHeight = 0; 
    //look at all cells in a "row". 
    //A row isn't defined by <div>, but by cellsOnRow
    for (var i = 1; i <= cellsOnRow; i++) 
    {
        var elementHeight = document.getElementById("cell" + i.toString()).clientHeight;
        if(elementHeight > biggestHeight)
        {
            biggestHeight = elementHeight;
        }
    }
    
    for (var i = 1; i <= cellsOnRow; i++) 
    {
        var element = document.getElementById("cell" + i.toString());
        element.style.width =  percentageOfElement.toString() + "%";
        element.style.height = biggestHeight;
    }
}
