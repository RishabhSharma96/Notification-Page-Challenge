var a = document.querySelector("#number");
var unreadMessage = document.querySelectorAll(".unread");

var count = a.innerHTML;

function decrement(i) {
    if (unreadMessage[i].classList.contains('removal') == false) {
        unreadMessage[i].classList.add("removal");
        count--;
        a.innerHTML = count;
    }
}

var all = document.querySelectorAll(".unread");

function decrementAll() {
    for (var i = 0; i < 3; i++) {
        all[i].classList.add("removal");
        count = 0;
        a.innerHTML = count;
    }
}