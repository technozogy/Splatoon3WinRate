const matches = [];

const date = document.getElementById("date");
const mode = document.getElementById("mode");
const rule = document.getElementById("rule");
const stage = document.getElementById("stage");
const weapon = document.getElementById("weapon");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const register = document.getElementById("register");
const matchList = document.getElementById("matchList");

let result;

class Match {
    constructor(date, mode, rule, stage, weapon, result){
        this.date = date;
        this.mode = mode;
        this.rule = rule;
        this.stage = stage;
        this.weapon = weapon;
        this.result = result;
    }
}

register.addEventListener("click", () => {
    if(win.checked){
        result = "勝ち";
    }
    if(lose.checked){
        result ="負け";
    }
    const match = new Match(date.value, 
                mode.value, 
                rule.value, 
                stage.value, 
                weapon.value, 
                result);

    matches.push(match);

    matchList.innerHTML += `
    <div>
        <p>${match.date}</p>
        <p>${match.mode}</p>
        <p>${match.rule}</p>
        <p>${match.stage}</p>
        <p>${match.weapon}</p>
        <p>${match.result}</p>
    </div>
    `;

});

document.addEventListener("DOMContentLoaded", () => { 


});
