const matches = [];

const date = document.getElementById("date");
const mode = document.getElementById("mode");
const rule = document.getElementById("rule");
const stage = document.getElementById("stage");
const weapon = document.getElementById("weapon");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const registerBtn = document.getElementById("register");
const matchList = document.getElementById("matchList");
const registerTab = document.getElementById("registerTab");
const registerScreen = document.getElementById("registerScreen");

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

//登録ボタンが押された時の処理
registerBtn.addEventListener("click", () => {
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

//登録タブを押したときの処理
registerTab.addEventListener("click", () => {
    registerScreen.style.display = "block";
})


document.addEventListener("DOMContentLoaded", () => { 


});
