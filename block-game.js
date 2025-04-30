let btn = document.querySelector(".btn");

btn.onclick = function () {
    let myName = document.querySelector(".name");
    myName.textContent = window.prompt("enter your name please ", "unknow");
    document.querySelector(".start").remove();
}


let divs = document.querySelectorAll(".all > div");

// let myArr = [...Array(divs.length).keys()];
// console.log(myArr);
// function shifl(arry) {
//     let len = myArr.length,
//         random,
//         temp;
//     while (len > 0) {
//         len--;
//         random = Math.floor(Math.random() * len);
//         temp = arry[len];
//         arry[len] = arry[random];
//         arry[random] = temp;
//     }
//     return arry;
// }
// shifl(myArr);
// myArr.forEach((e, i) => {
//     divs[i].style.order = e;
// });



let al = document.querySelector(".all");

let win = 0;

//  ============= wrong tries ======================
let wrongT = document.querySelector(".try");
wrongT.innerHTML = 0;
let counter = 0, wrongTries = 0;
let firstOne, secondeOne;
divs.forEach(function (e) {
    e.onclick = function () {

        counter == 0 ? firstOne = e : secondeOne = e;
        counter++;
        e.style.transform = "rotateY(-180deg)";
        if (counter == 2) {
            al.classList.add("no-clicking");
            if (firstOne.getAttribute("data-car") !== secondeOne.getAttribute("data-car")) {
                wrongTries++;
                setTimeout(() => {
                    firstOne.style.transform = "rotateY(0deg)";
                    secondeOne.style.transform = "rotateY(0deg)";
                    wrongT.innerHTML = wrongTries;
                }, 500);
            }
            else {
                win++;
                // console.log(win);
            }
            counter = 0;
        }
        setTimeout(() => {
            al.classList.remove("no-clicking");
        }, 2000);

        if (win == 10) {
            Gameover();

        }
    }
});

function Gameover() {
    console.log("game over");
    let gameOver = document.createElement("div");
    document.body.prepend(gameOver);
    gameOver.style.cssText = "position: fixed; width: 100% ; z-index: 20; background-color: #663399cf; height: 100% ";
    let textGame = document.createElement("h2");
    gameOver.appendChild(textGame);
    textGame.style.cssText = "position : absolute ; left : 50% ; top : 50% ; transform : translate(-50% ,-50%);";
    textGame.innerHTML = "game over";
    let btnChoice = document.createElement("button");
    gameOver.appendChild(btnChoice);
    btnChoice.innerHTML = "click to repeat";

    btnChoice.style.cssText = "position : absolute ; left : 50% ; top : 60% ; transform : translate(-50% ,-50%); padding : 10px;";
    btnChoice.addEventListener("click", function () {
        //  window.close();
        window.location.reload();
    });
}

let ls = [0, 1, 3, 6, 10], res = [];
ls.reverse();
while (ls.length > 0) {
    res.push((ls.reduce((a, b) => a + b), 0));
    ls.length--;
}


console.log(res);