let home = 0;
let guest = 0;
let homescore = document.getElementById("home-score");
let guestscore = document.getElementById("guest-score");

function HomeAdd1() {
    home += 1;
    homescore.textContent = home;
}

function GuestAdd1() {
    guest += 1;
    guestscore.textContent = guest;
}

function HomeAdd2() {
    home += 2;
    homescore.textContent = home;
}

function GuestAdd2() {
    guest += 2;
    guestscore.textContent = guest;
}

function HomeAdd3() {
    home += 3;
    homescore.textContent = home;
}


function GuestAdd3() {
    guest += 3;
    guestscore.textContent = guest;
}

function NewGame() {
    home=0;
    guest=0;
    homescore.textContent = 0;
    guestscore.textContent = 0;
}