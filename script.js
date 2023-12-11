var currentPosition1 = 100;
var moveAmount1 = 30;

document.getElementById('knop').addEventListener('click', function() {
    var knop = document.getElementById('knop');
    if (currentPosition1 === 100) {
        knop.style.top = (currentPosition1 - moveAmount1) + 'px';
        currentPosition1 -= moveAmount1;
    } else {
        knop.style.top = (currentPosition1 + moveAmount1) + 'px';
        currentPosition1 += moveAmount1;
    }
});

var currentPosition2 = 100;
var moveAmount2 = 20;

document.getElementById('knop2').addEventListener('click', function() {
    var knop = document.getElementById('knop2');
    if (currentPosition2 === 100) {
        knop.style.top = (currentPosition2 - moveAmount2) + 'px';
        currentPosition2 -= moveAmount2;
    } else {
        knop.style.top = (currentPosition2 + moveAmount2) + 'px';
        currentPosition2 += moveAmount2;
    }
});

function resetPositions() {
    currentPosition1 = 100;
    document.getElementById('knop').style.top = currentPosition1 + 'px';

    currentPosition2 = 100;
    document.getElementById('knop2').style.top = currentPosition2 + 'px';
}

function myFunction() {
    var knop1 = document.getElementById("knop");
    var knop2 = document.getElementById("knop2");
    
    knop1.style.top = "100px";
    knop2.style.top = "100px";

    setTimeout(resetPositions, 2000); 
}
