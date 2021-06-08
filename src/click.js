let item = document.getElementsByClassName("item");
let text = document.querySelector(".mainText");
let text2 = document.getElementsByClassName("mainText");
let rearray = [
  "현역",
  "재수",
  "삼수",
  "사수",
  "오수",
  "육수",
  "칠수",
  "팔수",
  "구수",
  "씹수",
];
let checkstatus = 0;

let add = () => {
  if (checkstatus >= 9) {
    text.innerText = "그만 좀 하지 ㅋㅋ";
  } else {
    checkstatus += 1;
    text.innerText = rearray[checkstatus];
  }
  randomText();
  textAnimation();
};

let subtract = () => {
  if (checkstatus > 0) {
    checkstatus -= 1;
    text.innerText = rearray[checkstatus];
  }
  randomText();
};

/* year change event */
let dateValue = 0;
let optionvalue = "";
let sel = document.getElementById("years-select");
let changeYears = () => {
  for (dateValue = 0; dateValue < sel.options.length; dateValue++) {
    if (sel.options[dateValue].selected == true) {
      optionvalue = sel.options[dateValue].value;
      break;
    }
  }

  // localStorage
  localStorage.setItem("year", optionvalue);
  var useroption = localStorage.getItem("year");
  optionvalue = useroption;
  switch (optionvalue) {
    case "hs1":
      dateValue = 2;
      checkstatus = 0;
      break;
    case "hs2":
      dateValue = 1;
      checkstatus = 0;
      break;
    case "hs3":
      dateValue = 0;
      checkstatus = 0;
      break;
  }
  text[0].innerText = rearray[checkstatus];
};
//initalize
var useroption = localStorage.getItem("year");
const initialize = () => {
  for (let k = 1; k < 4; k++) {
    if (useroption === "hs" + k) {
      dateValue = 3 - k;
      sel.selectedIndex = k - 1;
    }
  }
};
initialize();

let yearArray = ["November 18, 2021", "November 17, 2022", "November 16, 2023"];
/* d-day event */
function getDdays() {
  let today = new Date();
  var test = new Date(yearArray[dateValue]);
  test.setFullYear(test.getFullYear() + checkstatus);
  const ddays = test.getTime() - today.getTime();
  let days = Math.floor(ddays / (1000 * 60 * 60 * 24));
  const hours = ddays / (1000 * 60 * 60 * 24) - days;
  hour = Math.floor(hours * 24);
  const minutes = hours * 24 - hour;
  minute = Math.floor(minutes * 60);
  const seconds = minutes * 60 - minute;
  second = Math.floor(seconds * 60);
  let dDayText = document.getElementsByClassName("d-dayText");
  let array = [days, hour, minute, second];
  for (let i = 0; i < 4; i++) {
    dDayText[i].innerText = array[i];
  }
}

function init1() {
  getDdays();
  setInterval(getDdays, 500);
}

init1();

// random text
function randomText() {
  let floattext = document.getElementsByClassName("floatText");
  let tagtext = [
    "정신 차리자",
    "의대 가야지",
    "연세대가 우리를 기다린다",
    "컴퓨터공학과 !",
    "연애는 대학가서",
    '"성공적인 대학생활"',
    "서카포",
    "디미고 화이팅",
    "인생은 실전이다",
    '"시발점"',
    "노베의 기적",
    "드리블 누가 막을 건데.",
    "200일의 전사",
    "주식 볼 시간에 공부해",
    "김종수 사랑해",
    "이거 볼 시간에 공부해",
    "엄준식",
  ];
  let length = tagtext.length;
  while (length) {
    // 랜덤한 배열 index 추출
    let index = Math.floor(length-- * Math.random());

    // 배열의 끝에서부터 0번째 아이템을 순차적으로 대입
    let temp = tagtext[length];

    // 랜덤한 위치의 값을 맨뒤(this[length])부터 셋팅
    tagtext[length] = tagtext[index];

    // 랜덤한 위치에 위에 설정한 temp값 셋팅
    tagtext[index] = temp;
  }

  for (let i = 0; i < floattext.length; i++) {
    floattext[i].innerText = tagtext[i];
  }
}
randomText();
