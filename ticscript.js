var turn = null;
var q = 0;
var r = 0;
function ipx() {
    if (q == 0) {
        turn = "X";
        q = 1;
        r = 1;
    }
}
function ipo() {
    if (r == 0) {
        turn = "0";
        q = 1;
        r = 1;
    }
}
var f = 0;
var y = 0;
function chngtrn() {
    if (turn != null) {
        if (turn == "X") {
            return "0";
        }
        else if (turn == "0") {
            return "X";
        }
    }
}
function win() {
    f = f + 1;
    let spanip = document.getElementsByClassName('bo');
    let winarr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],]
    winarr.forEach(element => {
        if ((spanip[element[0]].innerText === spanip[element[1]].innerText)
            && (spanip[element[2]].innerText === spanip[element[1]].innerText)
            && (spanip[element[0]].innerText !== "")) {
            window.alert(spanip[element[0]].innerText + " WON ");
            y = 1;
        }
    })
    if (f == 9 && y !== 1) {
        window.alert("DRAW");
    }
}
let input = document.getElementsByClassName("box");
Array.from(input).forEach(Element => {
    let btext = Element.querySelector(".bo");
    Element.addEventListener("click", function () {
        if (btext.innerText == "" && y == 0) {
            btext.innerText = turn;
            if (turn == null) {
                alert("Please select a player!!");
            }
            if (turn != null) {
                turn = chngtrn();
                win();
            }
        }
    })
})
