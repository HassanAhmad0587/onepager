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


// popup every 5 seconds
function showPopup() {
    // Display the popup
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    // Hide the popup when the close button is clicked
    document.getElementById("popup").style.display = "none";
}

// Show the popup every 2 seconds
setInterval(showPopup, 5000);

function showPopup() {
    var popup = document.getElementById("popup");
    
    // Calculate random positions
    var randomTop = Math.floor(Math.random() * (window.innerHeight - popup.clientHeight));
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - popup.clientWidth));

    // Set the top and left styles
    popup.style.top = randomTop + "px";
    popup.style.left = randomLeft + "px";

    // Display the popup
    popup.style.display = "block";
}