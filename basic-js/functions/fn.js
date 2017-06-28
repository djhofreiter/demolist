var c = console;


// Executes when DOM is rendered
window.onload = function() {
    var elem = document.getElementById("main");
    log(elem);
}

// Function
function log(val) {
    c.log(val);
    
}

// Executed function
log('hello');
log(1);

// Executes before page is done
var scriptelem = document.getElementsByTagName("script");
log(scriptelem);