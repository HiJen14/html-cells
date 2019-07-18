/*Script to rock the cells. Or scale them!*/
/******************************************/

    /*window.onload = function myFunction()
    {
        var cellID = document.getElementById("cell1");
        console.log(cellID.outerHTML);
    };*/

function InitializeCells(totalMainCells, cellsOnRow, xmlUrl) 
{
   //Read XML file
    /*var xmlCellConfig = "";
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () 
	{
		if (objXMLHttpRequest.readyState == 4 && objXMLHttpRequest.status == 200) 
		{
			xmlCellConfig = objXMLHttpRequest.responseXML;
			console.log(xmlCellConfig);
        }
    };
    objXMLHttpRequest.open("GET", xmlUrl, true);
    objXMLHttpRequest.send();
	
	var parser, xml;
	//All browsers 
	if (window.DOMParser) 
	{
		parser = new DOMParser();
		xml = parser.parseFromString(xmlCellConfig, 'text/xml');
	}
	else 
	{ // For internet explorer
		xml = new ActiveXObject('Microsoft.XMLDOM');
		xml.async = false;
		xml.loadXML(xmlCellConfig);
	}

	var nodes = xml.getElementsByTagName('cell');
	
		console.log(nodes);

	var i, l = nodes.length, answers = [];
	for (i = 0; i < l; i++) {
		answers.push(nodes[i].childNodes[0].nodeValue);
	}

	console.log(answers);*/
    
    var percentageOfElement = 100 / cellsOnRow;
    
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
    
    for (i = 1; i <= cellsOnRow; i++) 
    {
        var element = document.getElementById("cell" + i.toString());
        element.style.width =  percentageOfElement.toString() + "%";
        element.style.height = biggestHeight.toString() + "px";
    }
}
