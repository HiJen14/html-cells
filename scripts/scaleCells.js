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
	var totalWidthCount = 0;
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
		
		/*Count up the widthCells percentage count*/
		totalWidthCount += parseInt(widthCells[i]);
		console.log(totalWidthCount);
    }

	
	//  100% / totalWidthCount 
	var percentage = 100 / totalWidthCount;
	console.log(percentage);
    
    for (i = 1; i <= cellsOnRow; i++) 
    {	
        var element = document.getElementById("cell" + i.toString());
		
		var percentageOfElement = parseInt(widthCells[i]) * percentage;
		console.log(percentageOfElement);
        element.style.width =  percentageOfElement.toString() + "%";
		
        element.style.height = biggestHeight.toString() + "px";
    }	
}