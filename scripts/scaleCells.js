/*Script to rock the cells. Or scale them!*/
/******************************************/

    /*window.onload = function myFunction()
    {
        var cellID = document.getElementById("cell1");
        console.log(cellID.outerHTML);
    };*/

function OnScaling(totalMainCells) 
{
    var percentageOfElement = 100 / totalMainCells;
    
    console.log("Yuuuuuuuuuuuuuuuuuuuuuuuuupp");
    console.log(totalMainCells);
    var i;
    for (i = 1; i <= totalMainCells; i++) 
    {
        console.log("cell" + i.toString());
        document.getElementById("cell" + i.toString()).style.width =  percentageOfElement.toString() + "%";
    }
}
