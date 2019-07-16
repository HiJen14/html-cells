/*Script to rock the cells. Or scale them!*/
/******************************************/

    window.onload = function myFunction()
    {
    
        //var cellID = document.getElementById("cell1");
        //console.log(cellID.outerHTML);
    };

function OnScaling(totalMainCells) 
{
    for (var i = 1; i <= totalMainCells; i++) 
    {
        console.log("cell" + i.toString());
        document.getElementById("cell" + i.toString()).style.width = "300px";
    }
}
