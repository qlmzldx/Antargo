mybutton = document.getElementById("myBtn");
var prevScrollpos = window.pageYOffset;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function init() {
    setInterval("checimg()", 3000);
}

var i = 1;

function checimg() {
    i++;
    var img1 = document.getElementById("img1");
    img1.src = "images/" + i + ".png";
    if (i == 3) {
        i = 0;
    }
}