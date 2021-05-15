var one = document.getElementById("textbox_one");
var two = document.getElementById("textbox_two");
var print_res = document.getElementById("result");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");

add.addEventListener("click", perform.bind(this, "+"));
sub.addEventListener("click", perform.bind(this, "-"));
mul.addEventListener("click", perform.bind(this, "*"));
div.addEventListener("click", perform.bind(this, "/"));


function perform(op) {
    var numone = parseFloat(one.value) || 0;
    var numtwo = parseFloat(two.value) || 0;
    var res;

    switch(op) {
        case "+":
            res = numone + numtwo;
            break;
        case "-":
            res = numone - numtwo;
            break;
        case "*":
            res = numone * numtwo;
            break;
        case "/":
            res = numone / numtwo;
            break;
    }

    print_res.innerHTML = res;
}