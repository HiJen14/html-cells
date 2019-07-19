/*Script to rock the cells. Or scale them!*/
/******************************************/

function InitializeCells(totalMainCells, cellsOnRow, xmlUrl) 
{
    /*
    JS array names, initialised outside JS file.

    widthCells
    heightCells
    lockedCells
    ********************************************
    */
    
    var biggestHeight = 0; 
    //look at all cells in a "row". 
    //A row isn't defined by <div>, but by cellsOnRow
    for (var i = 1; i <= cellsOnRow; i++) 
    {
        var elementHeight = document.getElementById("cell" + i.toString()).clientHeight;
         console.log(elementHeight);
        if(elementHeight > biggestHeight)
        {
            biggestHeight = elementHeight;
        }
    }

    var percentageOfElement = 100 / cellsOnRow;
	

    
    for (i = 1; i <= cellsOnRow; i++) 
    {
		var width = $("#cell" + i.toString()).width();
		console.log(width);
		
		
        var element = document.getElementById("cell" + i.toString());
        element.style.width =  percentageOfElement.toString() + "%";
        element.style.height = biggestHeight.toString() + "px";
    }
}