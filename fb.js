var num=1;
function divBy3(num) {
    if (num %3==0) {
        console.log("fizz");
        document.write("fizz");
    }
}
function divBy5(num) {
    if (num %5==0) {
        console.log("buzz");
        document.write("buzz");
    }
}
for (;num<16; num++) {
    if (num%3!=0 && num%5!=0) {
        console.log(num)
        document.write(num)
    }
    if (num%3==0 && num%5==0) {
        console.log("fizzbuzz")
        document.write("fizzbuzz")
    }
    else {
        divBy3(num);
        divBy5(num);
    }
    document.write("<br>");
}
