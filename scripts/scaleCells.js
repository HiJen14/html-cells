/*Script to rock the cells. Or scale them!*/
/******************************************/

function InitializeCells() 
{
    /*
    JS variable names, initialised outside JS file.
	
	Vars:
	totalMainCells
	cellsOnRow

	Arrays:
    widthCells
    heightCells
    lockedCells
    ********************************************
    */
	
	/* Performances calculation */
	if(debugModus)
	{
		var startTime = new Date();
	}
    
	var rows = totalMainCells / cellsOnRow;
	
	
	//needed for calculating each row.
	for(var j = 0; j < rows; j++)
	{
		//Calculate beginning each row.
		var startOfRow = j * cellsOnRow;
		
		var totalWidthCount = 0;
		//look at all cells in a "row". 
		//A row isn't defined by <div>, but by cellsOnRow
		for (var i = 1; i <= cellsOnRow; i++) 
		{	
			/*Count up the widthCells percentage count*/
			totalWidthCount += parseInt(widthCells[i + startOfRow - 1]);
		}
	
		//  100% / totalWidthCount 
		var percentage = 100 / totalWidthCount;
    
		/*Put width on <div id="cell">*/
		for (i = 1; i <= cellsOnRow; i++) 
		{	
			var element = document.getElementById("cell" + (i + startOfRow).toString());
		
			//Calculate width of each cell.
			var percentageOfElement = parseInt(widthCells[i + startOfRow - 1]) * percentage;
			//console.log(percentageOfElement);
			element.style.width =  percentageOfElement.toString() + "%";
		}	
	
		var biggestHeight = 0; 
		//look at all cells in a "row". 
		//A row isn't defined by <div>, but by cellsOnRow
		for (var i = 1; i <= cellsOnRow; i++) 
		{
			/*Find biggest element height*/
			var elementHeight = document.getElementById("cell" + (i + startOfRow).toString()).clientHeight;
			//console.log(elementHeight);
			if(elementHeight > biggestHeight)
			{
				biggestHeight = elementHeight;
			}
		}
	
		/*Put height on <div id="cell">*/
		for (i = 1; i <= cellsOnRow; i++) 
		{
			var element = document.getElementById("cell" + (i + startOfRow).toString());
		
			element.style.height = biggestHeight.toString() + "px";
		}	
	}
	
	/* Performances calculation */
	if(debugModus)
	{
		var Duration = new Date() - startTime;
		console.log(Duration + "ms");
	}
}