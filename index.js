// console.log("JAI SHREE RAM");
var players = [
  {
    fullName: "ANURAG SHUKLA",
    username: "THEDESTROYER",
    country: "INDIA",
    score: 999,
  },
  {
    fullName: "AARAV GAUTAM",
    username: "ORANGENINJA",
    country: "INDIA",
    score: 57,
  },
  {
    fullName: "AKHSHAT GAUTAM",
    username: "GREENSAMURAI",
    country: "INDIA",
    score: 10,
  },
];

function comparatorT(a, b) {
  if (a["score"] > b["score"]) {
    return -1;
  } else if (b["score"] > a["score"]) {
    return 1;
  } else {
    return 0;
  }
}

function leaderboardDisplay(arr) {
  let showData = document.getElementById("displayResult");
  showData.innerHTML = "";

  players.sort(comparatorT);

  let tym = new Date();
  let str = tym.toDateString() + " " + tym.toLocaleTimeString();
  str = str.substring(3,str.length);
//   console.log(str);

  arr.forEach((item, index) => {
    let profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    let rankNo = document.createElement("h1");
    if(index < 3) rankNo.innerText = "[#" + parseInt(index + 1) + "]";
    else rankNo.innerText = index + 1 + ".";
    profileDiv.append(rankNo);

    let nameTime = document.createElement("div");
    nameTime.classList.add("exactTime");
    let name = document.createElement("h2");
    name.innerText = item.fullName;
    nameTime.append(name);
    let tmm = document.createElement("p");
    tmm.innerText = str;
    nameTime.append(tmm);

    profileDiv.append(nameTime);

    let userName = document.createElement("h2");
    userName.innerText = item.username;
    profileDiv.append(userName);

    let desh = document.createElement("h2");
    desh.innerText = item.country;
    profileDiv.append(desh);

    let scoreData = document.createElement("div");

    let less = document.createElement("span");
    less.innerText = "-5";
    scoreData.append(less);
    less.addEventListener("click", () => minus5(index));

    let scoree = item.score;
    let num = document.createElement("h2");
    num.innerText = scoree;
    scoreData.append(num);

    let more = document.createElement("span");
    more.innerText = "+5";
    scoreData.append(more);
    more.addEventListener("click", () => add5(index));

    profileDiv.append(scoreData);

    let dlt = document.createElement("span");
    dlt.innerText = "delete";
    dlt.classList.add("material-symbols-outlined");
    scoreData.append(dlt);

    dlt.addEventListener("click", () => removeData(index));

    showData.append(profileDiv);
  });
}

function addPlayer(fName, uName, country, score) {
  let obj = {
    fullName: fName,
    username: uName,
    country: country,
    score: score,
  };
  players.push(obj);
  leaderboardDisplay(players);
}

window.addEventListener("load", () => {
  leaderboardDisplay(players);

  let infoForm = document.getElementById("playerInfo");
  infoForm.addEventListener("submit", (tsk) => {
    tsk.preventDefault();
    let fName = document.getElementById("pNAme").value;
    let uName = document.getElementById("uName").value;
    let country = document.getElementById("country").value;
    let score = parseInt(document.getElementById("score").value);
    // let addBtn = document.getElementById("addBtn");
    if (fName === "" || uName === "" || country === "" || !Number.isInteger(score)) {
      alert("FILL ALL THE INFORMATIONS CORRECTLY");
    } else {
      addPlayer(fName, uName, country, score);
    }
  });
});

function removeData(index) {
  players.splice(index, 1);
  leaderboardDisplay(players);
//   console.log("delete");
}
function add5(index) {
  players[index]["score"] += 5;
  leaderboardDisplay(players);
}
function minus5(index) {
  players[index].score -= 5;
  leaderboardDisplay(players);
}
