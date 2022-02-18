const allwords = ["apple", "techonology", "psit", "computer", "science", "analytics", "python", "hashcode", "hackathon", "example", "attribute", "behaviour", "facebook", "watsapp", "graphics", "vector", "engineering", "website", "password", "malicious", "artificial", "intelligence", "enviornment", "opponent", "monitoring", "specification", "algorithm", "automation", "smartphone", "radio"];
correctword = allwords[Math.floor(Math.random() * allwords.length)];
var answer = [];
var arrword = correctword;
var wrong = 0;
var userip;
var input;
var x = 0;
var win = 0;
var check = correctword.length;
var ck = 0;
for (var i = 0; i < correctword.length; i++) {
    answer[i] = " _ ";
}
var left = correctword.length;
function unhide(targetElement) {
    document.getElementById(targetElement).style.visibility = "visible";
}
function hangman() {
    userip = document.getElementById("ip").value;
    input = document.getElementById("ip");
    if (win != check && wrong != 10) {
        if (userip.length !== 1) {
            window.alert("ENTER A SINGLE LETTER");
            input.value = '';
            input.placeholder = 'enter a letter';
        }
        else {
            ck = 0;
            for (var i = 0; i < correctword.length; i++) {
                if (userip === correctword[i]) {
                    console.log(userip)
                    win++;
                    var x = arrword.indexOf(userip);
                    arrword = arrword.replace(userip, "1");
                    answer[x] = userip;
                    document.getElementById("full").innerHTML = answer;
                    correctword = correctword.replace(userip, '');
                    ck = 1;
                    break;
                }
            }
            if (ck == 0) {
                window.alert("WRONG");
                wrong++;
                switch (wrong) {

                    case 1:
                        unhide("rod1");
                        break;
                    case 2:
                        unhide("rod2");
                        break;
                    case 3:
                        unhide("rod3");
                        break;
                    case 4:
                        unhide("face");
                        break;
                    case 5:
                        unhide("body");
                        break;
                    case 6:
                        unhide("arm1");
                        break;
                    case 7:
                        unhide("arm2");
                        break;
                    case 8:
                        unhide("leg1");
                        break;
                    case 9:
                        unhide("leg2");
                        break;
                    case 10:
                        unhide("rope");
                        break;
                    default:
                        break;
                }
            }
        }
    }
    if (win == check) {
        window.alert("YOU WON");
    }
    if (wrong == 10) {
        window.alert("GAME OVER");
    }
    input.value = '';
    input.placeholder = 'Enter a Letter';
}


