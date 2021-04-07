let item = document.getElementsByClassName("item");
let text = document.getElementsByClassName("mainText");
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
    text[0].innerText = "그만 좀 하지 ㅋㅋ";
  } else {
    checkstatus += 1;
    text[0].innerText = rearray[checkstatus];
    console.log(checkstatus);
  }
};

let subtract = () => {
  if (checkstatus > 0) {
    checkstatus -= 1;
    text[0].innerText = rearray[checkstatus];
    console.log(checkstatus);
  }
};
/*
item[0].addEventListener("click", function () {
  if (a >= 5) {
    text[0].innerText = "그만해";
  } else {
    
    text[0].innerText = rearray[a];
    a += 1;
    console.log(a);
  }
});
*/

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
  //
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
      console.log(dateValue);
      console.log(k);
      dateValue = 3 - k;
      sel.selectedIndex = k - 1;
      console.log(sel.selectedIndex);
    }
  }
};
initialize();

/* clock event */

let YYMMDD = document.getElementById("YYMMDD");
let time = document.getElementById("time");

// function clock() {
//   let today = new Date();
//   let year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let date = today.getDate();

//   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   let seconds = today.getSeconds();
//   time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
//   YYMMDD.innerText = year + "년 " + month + "월 " + date + "일";
// }

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
  let textarray = ["일", "시간", "분", "초"];
  for (let i = 0; i < 4; i++) {
    dDayText[i].innerText = array[i] + textarray[i];
  }
}

function init1() {
  getDdays();
  setInterval(getDdays, 500);
}
// function init2() {
//   clock();
//   setInterval(clock, 500);
// }
init1();
// init2();

// // cherry blossom on off
// let cherrycontainer = document.getElementById("blossom_container");
// let cherryicon = document.getElementsByClassName("icon");

// let cherryop = () => {
//   let k = 0.6;
//   if (cherryicon[0].classList.contains("off")) {
//     cherrycontainer.classList.remove("off");
//   } else {
//     cherrycontainer.classList.add("off");
//   }
// };

// let cherryblossomOnoff = () => {
//   cherryop();
//   if (!cherryicon[0].classList.contains("off")) {
//     cherryicon[0].classList.add("off");
//   } else {
//     cherryicon[0].classList.remove("off");
//   }
// };
//cherry blossom
// var Petal = /** @class */ (function () {
//   function Petal(config) {
//     this.customClass = config.customClass || "";
//     this.x = config.x || 0;
//     this.y = config.y || 0;
//     this.z = config.z || 0;
//     this.xSpeedVariation = config.xSpeedVariation || 0;
//     this.ySpeed = config.ySpeed || 0;
//     this.rotation = {
//       axis: "X",
//       value: 0,
//       speed: 0,
//       x: 0,
//     };
//     if (config.rotation && typeof config.rotation === "object") {
//       this.rotation.axis = config.rotation.axis || this.rotation.axis;
//       this.rotation.value = config.rotation.value || this.rotation.value;
//       this.rotation.speed = config.rotation.speed || this.rotation.speed;
//       this.rotation.x = config.rotation.x || this.rotation.x;
//     }
//     this.el = document.createElement("div");
//     this.el.className = "petal  " + this.customClass;
//     this.el.style.position = "absolute";
//     this.el.style.backfaceVisibility = "visible";
//   }
//   return Petal;
// })();
// var BlossomScene = /** @class */ (function () {
//   function BlossomScene(config) {
//     var container = document.getElementById(config.id);
//     if (container === null) {
//       throw new Error("[id] provided was not found in document");
//     }
//     this.container = container;
//     this.placeholder = document.createElement("div");
//     this.petals = [];
//     this.numPetals = config.numPetals || 10;
//     this.petalsTypes = config.petalsTypes;
//     this.gravity = config.gravity || 0.8;
//     this.windMaxSpeed = config.windMaxSpeed || 4;
//     this.windMagnitude = 0.2;
//     this.windDuration = 0;
//     this.width = this.container.offsetWidth;
//     this.height = this.container.offsetHeight;
//     this.timer = 0;
//     this.container.style.overflow = "hidden";
//     this.placeholder.style.transformStyle = "preserve-3d";
//     this.placeholder.style.width = this.container.offsetWidth + "px";
//     this.placeholder.style.height = this.container.offsetHeight + "px";
//     this.container.appendChild(this.placeholder);
//     this.createPetals();
//     requestAnimationFrame(this.updateFrame.bind(this));
//   }
//   /**
//    * Reset the petal position when it goes out of container
//    */
//   BlossomScene.prototype.resetPetal = function (petal) {
//     petal.x = this.width * 2 - Math.random() * this.width * 1.75;
//     petal.y = petal.el.offsetHeight * -1;
//     petal.z = Math.random() * 200;
//     if (petal.x > this.width) {
//       petal.x = this.width + petal.el.offsetWidth;
//       petal.y = (Math.random() * this.height) / 2;
//     }
//     // Rotation
//     petal.rotation.speed = Math.random() * 10;
//     var randomAxis = Math.random();
//     if (randomAxis > 0.5) {
//       petal.rotation.axis = "X";
//     } else if (randomAxis > 0.25) {
//       petal.rotation.axis = "Y";
//       petal.rotation.x = Math.random() * 180 + 90;
//     } else {
//       petal.rotation.axis = "Z";
//       petal.rotation.x = Math.random() * 360 - 180;
//       // looks weird if the rotation is too fast around this axis
//       petal.rotation.speed = Math.random() * 3;
//     }
//     // random speed
//     petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
//     petal.ySpeed = Math.random() + this.gravity;
//     return petal;
//   };
//   /**
//    * Calculate wind speed
//    */
//   BlossomScene.prototype.calculateWindSpeed = function (t, y) {
//     var a =
//       ((this.windMagnitude / 2) * (this.height - (2 * y) / 3)) / this.height;
//     return (
//       a *
//         Math.sin(((2 * Math.PI) / this.windDuration) * t + (3 * Math.PI) / 2) +
//       a
//     );
//   };
//   /**
//    * Update petal position
//    */
//   BlossomScene.prototype.updatePetal = function (petal) {
//     var petalWindSpeed = this.calculateWindSpeed(this.timer, petal.y);
//     var xSpeed = petalWindSpeed + petal.xSpeedVariation;
//     petal.x -= xSpeed;
//     petal.y += petal.ySpeed;
//     petal.rotation.value += petal.rotation.speed;
//     var t =
//       "translateX( " +
//       petal.x +
//       "px ) translateY( " +
//       petal.y +
//       "px ) translateZ( " +
//       petal.z +
//       "px )  rotate" +
//       petal.rotation.axis +
//       "( " +
//       petal.rotation.value +
//       "deg )";
//     if (petal.rotation.axis !== "X") {
//       t += " rotateX(" + petal.rotation.x + "deg)";
//     }
//     petal.el.style.transform = t;
//     // reset if out of view
//     if (petal.x < -10 || petal.y > this.height + 10) {
//       this.resetPetal(petal);
//     }
//   };
//   /**
//    * Change the wind speed
//    */
//   BlossomScene.prototype.updateWind = function () {
//     // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration
//     this.windMagnitude = Math.random() * this.windMaxSpeed;
//     this.windDuration = this.windMagnitude * 50 + (Math.random() * 20 - 10);
//   };
//   /**
//    * Create the petals elements
//    */
//   BlossomScene.prototype.createPetals = function () {
//     for (var i = 0; i < this.numPetals; i++) {
//       var tmpPetalType = this.petalsTypes[
//         Math.floor(Math.random() * (this.petalsTypes.length - 1))
//       ];
//       var tmpPetal = new Petal({ customClass: tmpPetalType.customClass });
//       this.resetPetal(tmpPetal);
//       this.petals.push(tmpPetal);
//       this.placeholder.appendChild(tmpPetal.el);
//     }
//   };
//   /**
//    * Update the animation frame
//    */
//   BlossomScene.prototype.updateFrame = function () {
//     if (this.timer === this.windDuration) {
//       this.updateWind();
//       this.timer = 0;
//     }
//     var petalsLen = this.petals.length;
//     for (var i = 0; i < petalsLen; i++) {
//       this.updatePetal(this.petals[i]);
//     }
//     this.timer++;
//     requestAnimationFrame(this.updateFrame.bind(this));
//   };
//   return BlossomScene;
// })();
// var petalsTypes = [
//   new Petal({ customClass: "petal-style1" }),
//   new Petal({ customClass: "petal-style2" }),
//   new Petal({ customClass: "petal-style3" }),
//   new Petal({ customClass: "petal-style4" }),
// ];
// var myBlossomSceneConfig = {
//   id: "blossom_container",
//   petalsTypes: petalsTypes,
// };
// var myBlossomScene = new BlossomScene(myBlossomSceneConfig);
