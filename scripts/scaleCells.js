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
    
	var totalWidthCount = 0;
    //look at all cells in a "row". 
    //A row isn't defined by <div>, but by cellsOnRow
    for (var i = 1; i <= cellsOnRow; i++) 
    {	
		/*Count up the widthCells percentage count*/
		totalWidthCount += parseInt(widthCells[i-1]);
		console.log(totalWidthCount);
    }

	
	//  100% / totalWidthCount 
	var percentage = 100 / totalWidthCount;
    
	/*Put width on <div id="cell">*/
    for (i = 1; i <= cellsOnRow; i++) 
    {	
        var element = document.getElementById("cell" + i.toString());
		
		var percentageOfElement = parseInt(widthCells[i-1]) * percentage;
		console.log(percentageOfElement);
        element.style.width =  percentageOfElement.toString() + "%";
    }	
	
	var biggestHeight = 0; 
    //look at all cells in a "row". 
    //A row isn't defined by <div>, but by cellsOnRow
    for (var i = 1; i <= cellsOnRow; i++) 
    {
		/*Find biggest element height*/
        var elementHeight = document.getElementById("cell" + i.toString()).clientHeight;
         console.log(elementHeight);
        if(elementHeight > biggestHeight)
        {
            biggestHeight = elementHeight;
        }
    }
	
	/*Put height on <div id="cell">*/
	for (i = 1; i <= cellsOnRow; i++) 
    {	
        var element = document.getElementById("cell" + i.toString());
		
        element.style.height = biggestHeight.toString() + "px";
    }	
	
}