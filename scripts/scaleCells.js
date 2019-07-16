/*Script to rock the cells. Or scale them!*/
/******************************************/

function OnScaling(var totalMainCells) 
{
    for (i = 1; i <= totalMainCells; i++) 
    {
        document.getElementById("cell" + i).style.width = "300px";
    }
}

    window.onload = function myFunction()
    {
    
        //var cellID = document.getElementById("cell1");
        //console.log(cellID.outerHTML);
    };


