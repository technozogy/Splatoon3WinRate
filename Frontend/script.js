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
const historyTab = document.getElementById("historyTab");
const historyScreen = document.getElementById("historyScreen");
const analysisTab = document.getElementById("analysisTab");
const analysisScreen = document.getElementById("analysisScreen");
const totalMatchesDisplay = document.getElementById("totalMatchesDisplay");
const winRateDisplay = document.getElementById("winRateDisplay");
const winMatchesDisplay = document.getElementById("winMatchesDisplay");



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
});

//戦歴再描画処理関数
function renderMatches(){
    matchList.innerHTML = "";

    matches.forEach((match, index) => {
     matchList.innerHTML += `
            <div>
                <p>${match.date}</p>
                <p>${match.mode}</p>
                <p>${match.rule}</p>
                <p>${match.stage}</p>
                <p>${match.weapon}</p>
                <p>${match.result}</p>


                <button class="deleteBtn" data-index="${index}">
                    削除
                </button>
            </div>
     `;
    });
}

matchList.addEventListener("click", (event) => {
    if(event.target.classList.contains("deleteBtn")){
        const index = Number(event.target.dataset.index);

        matches.splice(index, 1); //splice(開始位置, 削除する個数)

        renderMatches();
    }

});

//登録タブを押したときの処理
registerTab.addEventListener("click", () => {
    registerScreen.style.display = "block";
    historyScreen.style.display = "none";
    analysisScreen.style.display = "none";
});

//戦歴タブを押したときの処理
historyTab.addEventListener("click", () => {
    registerScreen.style.display = "none";
    historyScreen.style.display = "block";
    analysisScreen.style.display = "none";

    renderMatches();

});

//分析タブを押したときの処理
analysisTab.addEventListener("click", () => {
    registerScreen.style.display = "none";
    historyScreen.style.display = "none";
    analysisScreen.style.display = "block";

    analysisMatches();
});

//入力された条件を元に分析し、その結果を表示する関数
function analysisMatches(){
    const filteredMatches = matches.filter(match => {
        return (analysisDate.value === "" || match.date === analysisDate.value) 
                && (analysisMode.value === "" || match.mode === analysisMode.value)
                && (analysisRule.value === "" || match.rule === analysisRule.value)
                && (analysisStage.value === "" || match.stage === analysisStage.value)
                && (analysisWeapon.value === "" || match.weapon === analysisWeapon.value);
    });
    const winMatches = filteredMatches.filter(match => {
        return match.result === "勝ち";
    });

    const totalCount = filteredMatches.length;
    const winCount = winMatches.length;

    const winRate = totalCount === 0 ? 0 : (winCount / totalCount) * 100;

    totalMatchesDisplay.textContent = totalCount + "試合";
    winMatchesDisplay.textContent = winCount + "勝";
    winRateDisplay.textContent = winRate + "%";

}

//条件入力をするたびに分析をする処理し、勝率を画面に表示する処理
analysisDate.addEventListener("change", analysisMatches);
analysisMode.addEventListener("change", analysisMatches);
analysisRule.addEventListener("change", analysisMatches);
analysisStage.addEventListener("change", analysisMatches);
analysisWeapon.addEventListener("change", analysisMatches);


document.addEventListener("DOMContentLoaded", () => { 


});
