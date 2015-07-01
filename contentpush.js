// Slide in and out function
var button = document.getElementById('clickme');

button.addEventListener('click', function () {
    slide('box1', 'wrapper', 'overlay');
});

function slide(box, wrapper, wall) // just like with php get method passed to the url 
{
    var menu = document.getElementById(box); // here you store your info in a variable just like in php
    var elem = document.getElementById(wrapper);
    var blockade = document.getElementById(wall);

    //For Box
    menu.style.transition = 'left 0.5s ease-in-out 0s';
    menu.style.left = '0px';
    //For Wrapper
    elem.style.transition = 'left .5s ease-in-out 0s';
    elem.style.left = '200px';
    //For overlay
    blockade.style.display = 'block';
    if (blockade.style.display == 'block') {
        blockade.addEventListener('click', function () {
            blockade.style.display = 'none';
            menu.style.transition = 'left 0.5s ease-in-out 0s'; // manipulate the variable in any way you want
            menu.style.left = "-400px";
            //For Wrapper
            elem.style.transition = 'left .5s ease-in-out 0s';
            elem.style.left = '0px';
        });
    }
}