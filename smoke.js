function smoke() {
    "use strict";
    var c = document.getElementById("canvas");
    var circle = c.getContext("2d");
    circle.beginPath();
    circle.arc(100, 100, 30, 0, 2 * Math.PI);
    circle.fill();
}

function move() {
    
}