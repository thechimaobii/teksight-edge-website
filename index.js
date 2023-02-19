//variable declarations for the navbar
let menu = document.getElementById("hamburger");
let menu_close = document.getElementById("hamburger-close");
let socials_nav = document.getElementById("social");
let nav_bar = document.getElementById("nav_bar");
let nav_bg = document.getElementById("bg");
let nav_menu = document.getElementById("nav_menu");

//functions for the navbar
    function open_menu(){
        menu.style.display = "none";
        menu_close.style.display = "block";
        socials_nav.style.display = "block";
        nav_bar.style.borderLeft = "none";
        nav_bg.style.display = "block";
        nav_menu.style.display = "flex";

    }

    function close_menu(){
        menu.style.display = "flex";
        menu_close.style.display = "none";
        socials_nav.style.display = "none";
        nav_bar.style.borderLeft = "#fff 1px solid";
        nav_bg.style.display = "none";
        nav_menu.style.display = "none";

    }


let text_change = document.getElementById("change_text");
let texts = ["Inspire Emotion", "Leave Impressions", "Deliver Results"];
i = 0;
j = 0;
let currentWord = [];
let isEnd = false;
let slowDownText = false;
// let fullStop = document.getElementById("fullStop");

function changing(){
    text_change.innerHTML = currentWord.join('');
    slowDownText = false;

    if (i <= texts.length){

        if (!isEnd && j <= texts[i].length){
            currentWord.push(texts[i][j]);
            j++;
        text_change.innerHTML = currentWord.join('');

        }

        if (isEnd && j <= texts[i].length){
            currentWord.pop(texts[i][j]);
            j--;
            fullStop.style.display = "none";

        }

        if (j == texts[i].length){
            slowDownText = true;
            isEnd = true;
            text_change.innerHTML = currentWord.join('');
            fullStop.style.display = "block";
        }

        if (isEnd && j === 0){
            currentWord = [];
            isEnd = false;
            i++;
            if (i == texts.length){
                i = 0;
            }
        }
    }

    const slowTime = slowDownText ? 2000 : 200;
    setTimeout(changing, slowTime);

}

changing();