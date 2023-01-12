//master control of 200 iterations, before timeout error
var masterIterations = 0;
var masterInterval = setInterval(dotting(), 7500)

function dotting() {
    const interval = setInterval(dots, 1500);
    const intervalTwo = setInterval(resetDots, 6000);
    if (masterIterations > 10) {clearInterval(masterInterval); alert("error 2021: service timeout")}
}
    //create a 3 dots every 1.5 seconds each
    let iterations = 0;
    
    function dots() {
        iterations++;
        const text = document.getElementById("loading");
        text.innerText = text.innerText + ".";
        if (iterations > 2) {clearInterval(interval); iterationsTwo = 0;};
        
    }
    //remove the dots every 6 seconds
    let iterationsTwo = 0;

    function resetDots() {
        const text = document.getElementById("loading");
        text.innerText = "Loading";
        if (iterationsTwo > 0) {clearInterval(intervalTwo); iterations = 0;};
        
    }