window.app2 = (function(){

var privateVar = "I'm a private variable";
function doPost(callback) {
    var url = "http://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
            if (xhr.readyState ==4 && xhr.status ==201) {
                var data = xhr.responseText;
                callback(data)
            }
    }
    var dataToSend = {
        title: "Fred",
        body: "Trouble Maker",
        userID: 1
    };
    xhr.open("POST", url, true);
    xhr.send(dataToSend);

}

return {
    publicVar: privateVar,
    doPost: doPost,
}
 })(); //IIFE function