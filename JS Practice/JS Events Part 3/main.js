// var one = document.getElementById("item_one");
// var two = document.getElementById("item_two");
// var three = document.getElementById("item_three");



// one.addEventListener("click", edit);
// two.addEventListener("click", edit);
// three.addEventListener("click", edit);

// function edit() {
//     var outer_element = this;
//     var inner_element = outer_element.children[1];
//     outer_element.className = "edit";
//     inner_element.focus();
//     inner_element.setSelectionRange(0, inner_element.value.length);
//     inner_element.addEventListener("blur", function() {
//         outer_element.children[0].innerText = inner_element.value;
//         outer_element.className = "";
//     });
// }

var li = document.querySelectorAll("li");
var input = document.querySelectorAll("input");

li[0].previousElementSibling

for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", edit);
    input[i].addEventListener("blur", update);
    input[i].addEventListener("keypress", enterkey);
}

function edit() {
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function update() {
    this.previousElementSibling.innerText = this.value;
    this.parentElement.className = "";
}

function enterkey(event) {
    if (event.which === 13) {
        update.call(this);
    }
}