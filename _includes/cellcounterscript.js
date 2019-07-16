var cellCounter = 0;

window.onload = function myFunction()
{
    var name = prompt("What's your name?");
    var lengthOfName = name.length

    document.getElementById('output').innerHTML = lengthOfName;
};
