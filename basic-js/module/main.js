// Anonymous function
window.app = (function(module2){
    c.log("hello")
    c.log(module2.publicVar);
    window.onload = function() {
    module2.doPost(function(data) {
        c.log(data);
        document.getElementById("main").innerText = data;
    });
    }
 })(window.app2 || (window.app2) ); //IIFE function