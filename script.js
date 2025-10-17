function dice(status) {
    let d = document.getElementById(status);
    m = Math.floor(Math.random()*6+1);
    d.textContent = m;
}

function diceRoll() {
    return Math.floor(Math.random() * 6 + 1); // 1～6を返す
}

function changetext(){
    let currentText = chapter[storyIndex].text;
    let currentName = chapter[storyIndex].speaker;
    currentText = currentText.replace("{playerName}", playerName);
    currentName = currentName.replace("{playerName}", playerName);

    document.getElementById("speaker").textContent = currentName;
    document.getElementById("text").textContent = currentText;

    if (chapter[storyIndex].effect) {
        chapter[storyIndex].effect();
    }
    storyIndex++;

}

document.addEventListener("keydown", (e) => {
    // Enterキーが押された場合
    if (e.key === "Enter") {
        next.click(); 
    }
});

const sta = document.getElementById('sta');
const atk_set = document.getElementById('atk_set');
const san_set = document.getElementById('san_set');
const hp_set = document.getElementById('hp_set');
const luck_set = document.getElementById('luck_set');

const start = document.getElementById('start');
const next = document.getElementById("next");
const dicescreen = document.getElementById("dicescreen");
const cmd1 = document.getElementById("cmd1");
const cmd2 = document.getElementById("cmd2");
const cmd3 = document.getElementById("cmd3");
const status = document.getElementById("status");
const Status = document.getElementById("Status");
const StatusBuck = document.getElementById("StatusBuck");


// sta.addEventListener("click",()=>{
//     dice("HP");
//     dice("ATK");
//     dice("LUCK");
//     dice("SAN");
// });
let hp=0, atk=0, luck=0, san=0, total=0;
sta.addEventListener("click", () => {
    do {
        // 各ステータスをランダムに1〜6で振る
        hp = Math.floor(Math.random() * 6 + 1);
        atk = Math.floor(Math.random() * 6 + 1);
        luck = Math.floor(Math.random() * 6 + 1);
        san = Math.floor(Math.random() * 6 + 1);
        total = hp + atk + luck + san; // 合計値を計算
    } while (total > 15); // 15を超えたら振り直し

    // HTML上に表示
    document.getElementById("HP").textContent = hp;
    document.getElementById("ATK").textContent = atk;
    document.getElementById("LUCK").textContent = luck;
    document.getElementById("SAN").textContent = san;

    totalset();
    console.log(`合計: ${total}`); // デバッグ確認用
});
function totalset(){
    total = hp + atk + luck + san;
    document.getElementById("Total").textContent = total;
    if (total > 15) {
        Total.classList.add("red");
        Total.classList.remove("black");
    } else{
        
        Total.classList.add("black");
        Total.classList.remove("red");
    }
}
hp_set.addEventListener("click", () =>{
    hp = Math.floor(Math.random() * 6 + 1);
    document.getElementById("HP").textContent = hp;
    totalset();

})

atk_set.addEventListener("click", () =>{
    atk = Math.floor(Math.random() * 6 + 1);
    document.getElementById("ATK").textContent = atk;
    totalset();
})

luck_set.addEventListener("click", () =>{
    luck = Math.floor(Math.random() * 6 + 1);
    document.getElementById("LUCK").textContent = luck;
    totalset();
})

san_set.addEventListener("click", () =>{
    san = Math.floor(Math.random() * 6 + 1);
    document.getElementById("SAN").textContent = san;
    totalset();
})



let Luck;
let Atk;
let Hp;
let San;
let playerName;

let inventory = [];

start.addEventListener("click", () => {
    // 入力値取得
    playerName = document.getElementById("playerName").value.trim();
    let hp = parseInt(document.getElementById("HP").textContent);
    let atk = parseInt(document.getElementById("ATK").textContent);
    let luck = parseInt(document.getElementById("LUCK").textContent);
    let san = parseInt(document.getElementById("SAN").textContent);

    Luck = luck;
    Hp=hp;
    Atk=atk;
    San=san

    let Total=luck+atk+hp+san;
    // 未入力チェック
    if (!playerName || hp==0 || atk==0 || luck==0|| san==0) {
        alert("未入力の項目があります！");
        return;
    }else if(Total>15){
        alert("設定値を超えています！(合計ステータスは15まで)");
        return;
    }
 
    // 画面切り替え
    document.getElementById("status-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    // ゲーム画面初期表示
    document.getElementById("speaker").textContent = "ナレーター";
    document.getElementById("text").textContent = `${playerName}の冒険が始まる！`;
});



const story1 = [
    { speaker: "ナレーター", text: "王都の外れに建つ、石造りの巨大な学園──アルカナ魔導学園。" },
    { speaker: "ナレーター", text: "その大講堂には、今年度の新入生がずらりと並んでいる。" },
    { speaker: "ナレーター", text: "期待に胸を膨らませる者、不安に肩をすくめる者。" },
    { speaker: "ナレーター", text: "やがて壇上に一人の長い白髭を胸まで垂らした老人が立つ。" },
    { speaker: "ナレーター", text: "彼こそ、この学園の校長──オルランド・アルカナだ。" },
    { speaker: "オルランド校長", text: "「新入生諸君、ようこそアルカナ魔導学園へ！」" },
    { speaker: "オルランド校長", text: "(さて、どういった話をしようか...)" }
];

const story1_1 = [
    { speaker: "オルランド校長", text: "「――えー……ごほん。諸君、入学おめでとう。」" },
    { speaker: "オルランド校長", text: "「さて、まずは魔術とは何か、という根源的な問いから始めたい。」" },
    { speaker: "オルランド校長", text: "「魔術とは、人間の欲望を拡張したものである。」" },
    { speaker: "ナレーター", text: "（数分後）" },
    { speaker: "オルランド校長", text:"「重要なのは――努力、友情、そして根性である。」"},
    { speaker: "オルランド校長", text:"「努力の大切さは言うまでもない。ーーー」"    },
    { speaker: "ナレーター", text: "（さらに数分後）" },
];

const story1_1_1=[
    { speaker:"ナレーター", text: "あなたは眠気に襲われる。"},
    { speaker:"ナレーター", text: "隣の生徒にクスクス笑われた。"},
    { speaker:"ナレーター", text: "SANが1下がった！", effect: () => { San -= 1; } }, // ここでSAN減少
];

const story1_1_2=[
    { speaker:"ナレーター", text: "あなたは、校長先生の長い長い話に、最後まで耐えた。"},
    { speaker:"オルランド校長", text: "「……ほう。まだ起きている者がいるとは。実に立派だ。」"}, 
    { speaker:"ナレーター",text:"校長は満足げにうなずき、懐から古びた羊皮紙を取り出す。"},
    { speaker:"オルランド校長", text: "「これは、代々わしが大切にしてきた試練の言葉だ。」"}, 
    { speaker:"オルランド校長", text: "「諸君の未来を占うお守り代わりに渡しておこう。授業で役立つかもしれんぞ」"}, 
    { speaker: "ナレーター", text: "{playerName}は謎のメモを手に入れた！" , effect: () => { inventory.push("謎のメモ"); }}

];

const story1_2 = [
    { speaker:"オルランド校長", text: "「――コホン、新入生諸君！入学おめでとう。」"},
    { speaker:"オルランド校長", text: "「仲間を信じ、己を磨け！努力と友情を大切にしろ。 根性も忘れるな。以上だ！」"},
    { speaker:"ナレーター",text:"校長は満足げにうなずき、懐から古びた羊皮紙を取り出す。"},
    { speaker:"オルランド校長", text: "「これは、代々わしが大切にしてきた試練の言葉だ。」"}, 
    { speaker:"オルランド校長", text: "「諸君の未来を占うお守り代わりに渡しておこう。授業で役立つかもしれんぞ」"}, 
    { speaker: "ナレーター", text: "{playerName}は謎のメモを手に入れた！" , effect: () => { inventory.push("謎のメモ");}}
];

const story2 =[
    {speaker:"ナレーター", text:"入学式が終わり、新入生たちは自分のクラスへ向かう。"},
    {speaker:"ナレーター",text:"大講堂の扉を出ると、長い廊下が続いている。"},
    {speaker:"ナレーター", text:"壁には過去の卒業生の肖像画、天井には魔法で浮かぶランタンが灯る。"},
    {speaker:"ナレーター",text:"歩きながら、君たちは周囲の雑談や笑い声を聞き、期待に胸を膨らませる。"},
    {speaker:"ナレーター", text:"廊下の角を曲がった瞬間、青くてぷるぷるした小さなスライムが跳ねているのを見つけた。"},
    {speaker:"ナレーター",text:"教師たちは慌てていない様子で呟く。"},
    {speaker:"教師",text:"「……お前たち、ちょっと腕試しに片付けてみろ」"}
];


const story2_2=[
    {speaker:"ナレーター", text:"{playerName}の放った一撃が、スライムの中心を見事に貫いた。"},
    {speaker:"ナレーター",text:"「ぷしゅるるるっ！」と情けない声を残して、スライムは泡のように消え去る。"},
    {speaker:"ナレーター",text:"同級生たちから拍手と歓声が上がる。"},
    {speaker:"教師",text:"「おお！　強いな！」「入学早々やるじゃないか！」"},
    {speaker:"ナレーター",text:"教師もうなずきながら一言。"},
    {speaker:"教師",text:"「勇敢さと即断即決……それも魔術師には必要な資質だ」"}
];

const story2_1=[
    {speaker:"ナレーター", text:"攻撃が空振り！　スライムが跳ね返って、君の顔にべちゃりと張り付いた！"},
    {speaker:"{playerName}",text:"「うわっ！　た、助けて！」"},
    {speaker:"ナレーター",text:"仲間や教師の助けで何とか取り除かれるが、周囲からは笑い声が。"},
    {speaker:"教師",text:"「ははは！　スライムのほうが強いんじゃないか？」"},
    {speaker:"ナレーター",text:"ただし、教師は少し微笑みながら言う。"},
    {speaker:"教師",text:"「恐れるな。失敗を恥じるより、挑戦したことを誇れ」",effect:()=> {gameover();}}
];

const story2_3=[
    {speaker:"ナレーター", text:"{playerName}は咄嗟に近くの瓶やバケツを手に取り、スライムをひょいっとすくい上げる。"},
    {speaker:"ナレーター",text:"「ぷるっ！？　ぷしゅぅ……」と鳴きながら、中でおとなしく震えている。"},
    {speaker:"ナレーター",text:"教師は感心してうなずく。"},
    {speaker:"教師",text:"「おお、無駄な暴力を避け、実用性を考えるとは……いい判断だ。」"},
    {speaker:"教師",text:"「このスライム、薬草学の実験に役立てよう」」"},
    {speaker:"ナレーター",text:"周囲の生徒たちもざわめきながら拍手。"},
    {speaker:"教師",text:"「すごい！　頭いい！」「戦うだけが全てじゃないんだな」"}
];

const story3_1=[
    { speaker:"ナレーター", text: "1"}
];
const story3_2=[
    { speaker:"ナレーター", text: "2"}
];
const story3_3=[
    { speaker:"ナレーター", text: "3"}
];


let chapter = story1; // 最初はstory1
let storyIndex = 0;
// status.addEventListener("click",()=>{

next.addEventListener("click", () => {
    if (storyIndex < chapter.length) {
        // まだ文章が残っているとき
        changetext();
    } else {
        if (chapter === story1) {
            diceScreen(Luck,story1_1,story1_2,5);

        }else if(chapter === story1_1){
            diceScreen(Hp,story1_1_1,story1_1_2,10,San);

        }else if(chapter === story1_1_1||chapter===story1_1_2||chapter===story1_2){
            storyIndex = 0;
            chapter=story2;
        }else if(chapter===story2&&inventory.includes("謎のメモ")){
            storyIndex = 0;
            chapter = story2_3;
        }else if(chapter===story2){
            storyIndex = 0;
            diceScreen(Atk,story2_1,story2_2,20);
        }else if(chapter===story2_2||chapter===story2_3){
            const texta = "texta";
            const textb = "textb";
            const textc = "textc";
            storyIndex=0;
            cmdScreen(story3_1,story3_2,story3_3,texta,textb,textc);

        }
    }
});


let num=0; 

let decrsta=null;
let pendingDice = null;

function diceScreen(Sta, cap1, cap2, num,minsta) {
    document.getElementById("dice-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";


    pendingDice = { StaName: Sta, cap1, cap2, num };
    decrsta={ StaName: minsta};
}

function gameover(){
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("gameover").style.display="block";

}

let pendingcmd =null;

function cmdScreen(cap1,cap2,cap3,comand1,comand2,comand3){
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("cmd-screen").style.display = "block";
    document.getElementById("cmdtext1").innerHTML = comand1; 
    document.getElementById("cmdtext2").innerHTML = comand2; 
    document.getElementById("cmdtext3").innerHTML = comand3; 
    pendingcmd = { cap1: cap1, cap2: cap2, cap3: cap3 };
}

cmd1.addEventListener("click",()=>{
    // if(!pendingcmd)return;
    document.getElementById("cmd-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    chapter = pendingcmd.cap1; //        
    storyIndex = 0;
    pendingcmd = null;
    changetext();
});

cmd2.addEventListener("click",()=>{
    // if(!pendingcmd)return;
    document.getElementById("cmd-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    chapter = pendingcmd.cap2; //        
    storyIndex = 0;
    pendingcmd = null;
    changetext();
});

cmd3.addEventListener("click",()=>{
    // if(!pendingcmd)return;
    document.getElementById("cmd-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    chapter = pendingcmd.cap3; //        
    storyIndex = 0;
    pendingcmd = null;
    changetext();
});


dicescreen.addEventListener("click", () => {
    if (!pendingDice) return;

    document.getElementById("dice-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    let addsta = diceRoll();
    let chacksta;

    document.getElementById("speaker").textContent = "ナレーター";
    document.getElementById("text").textContent = `${addsta}が出た！`;
    // 累積させる
    if (pendingDice.StaName === Luck) {
        Luck += addsta;
        chacksta = Luck;
    } else if (pendingDice.StaName === Hp) {
        Hp += addsta;
        chacksta = Hp;
    } else if (pendingDice.StaName === Atk) {
        Atk += addsta;
        chacksta = Atk;
    } else if (pendingDice.StaName === San) {
        San += addsta;
        chacksta =San;
    }

    // 判定に使う値
    if (chacksta <= pendingDice.num) {
        // Stamin(num);
        chapter = pendingDice.cap1; //        
    } else {
        chapter = pendingDice.cap2;
    }
    decrsta=null;
    storyIndex = 0;
    pendingDice = null;
});



Status.addEventListener("click", () => {
    document.getElementById("playerName_game").innerHTML = playerName; 
    document.getElementById("HP_game").innerHTML = Hp;
    document.getElementById("ATK_game").innerHTML = Atk;
    document.getElementById("LUCK_game").innerHTML = Luck;
    document.getElementById("SAN_game").innerHTML = San;

    const itemList = document.getElementById("items");
    itemList.innerHTML = ""; // 一度クリア
    inventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });

    document.getElementById("sta-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
});

StatusBuck.addEventListener("click" , () => {
    document.getElementById("sta-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
});





