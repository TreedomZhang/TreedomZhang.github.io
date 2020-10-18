function updateScrollPosition() {

    var x = window.scrollX;
    var y = window.scrollY;

    // document.getElementById('scroll-x').innerHTML = x; to show x pos for testing
    // document.getElementById('scroll-y').innerHTML = y; to show y pos for testing

    console.log(x + ", " + y);


    var colorR = 250; // approx. 0 - 250
    var colorG = 250;
    var colorB = 250; // approx. 0 - 250
    var colorA = y * 0.0004;


    console.log(colorA);

    document.getElementById('colorChangeText').style.color = "rgba(" + colorR + "," + colorG + "," + colorB + "," + colorA + " )";
}