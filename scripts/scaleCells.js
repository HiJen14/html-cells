//Function to rock the cells. Or scale them!
for (i = 1; i <= {{ site.totalMainCells }}; i++) 
{
    window.onload = function myFunction()
    {
        document.getElementById("cell" + i).style.width = "300px";
    
        //var cellID = document.getElementById("cell1");
        //console.log(cellID.outerHTML);
    };
}
