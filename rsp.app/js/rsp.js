// const $computer = document.querySelector('#computer')
// const $score = document.querySelector('#sc')
// const $rock = document.querySelector('#rock')
// const $scissor = document.querySelector('#scissor')
// const $paper = document.querySelector('#paper') 

// var imgRsp = document.querySelector("#cpu_r");

// const imagePaths = ["img/rock.png", "img/scissors.png", "img/paper.png"];

// let currentImageIndex = 0;

// // 이미지 요소 선택
// const image = document.getElementById("#cpu_rsp");

// // 이미지 변경 함수
// function changeImage() {
//     // 이미지의 src 속성을 변경하여 이미지를 교체
//     image.src = imagePaths[currentImageIndex];
    
//     // 다음 이미지 인덱스로 이동
//     currentImageIndex++;
    
//     // 이미지 인덱스가 배열 길이를 초과하면 처음 이미지로 돌아감
//     if (currentImageIndex >= imagePaths.length) {
//         currentImageIndex = 0;
//     }
// }

// 2초마다 이미지 변경 함수를 호출하여 이미지를 스위치
// setInterval(changeImage, 2000); // 2000 밀리초(2초)마다 실행



// const scissorsImg = document.querySelector("#cpu_s");
// console.log(scissorsImg)
// scissorsImg.src = "img/scissors.png";
// scissorsImg.width = "200px";
// scissorsImg.height = "200px";

// const paperImg = document.querySelector("#cpu_p");
// console.log(paperImg)
// paperImg.src = "img/paper.png";
// paperImg.width = "200px";
// paperImg.height = "200px";

// setInterval(() => {
//   if(rockImg === rspX.rock){
//     rockImg = rspX.scissors;
//   } else if(rockImg === rspX.scissors){
//     rockImg = rspX.paper;
//   } else if(rockImg === rspX.paper){
//     rockImg = rspX.rock;
//   }
// },50);

//グーのボタンを押した場合
$("#rock").on("click", function(){
  var randum = Math.floor(Math.random() * 3);

  console.log(randum, "randum_box")

  //対象クラスを持つh1を習得する
  var userSc = document.querySelector('.score_User')
  var cpuSc = document.querySelector('.score_Cpu')
  // 対象クラスの文字を習得する
  var stringNumUser = userSc.textContent
  var stringNumCpu = cpuSc.textContent
  // 文字を数字化する
  var numUser = parseInt(stringNumUser, 10)
  var numCpu = parseInt(stringNumCpu, 10)

  var imgRock = $("<img>")
  imgRock.attr("src","img/rock.png")
  imgRock.css("width", "200px")
  imgRock.css("height", "200px") 

  var imgScissors = $("<img>")
  imgScissors.attr("src","img/scissors.png")
  imgScissors.css("width", "200px")
  imgScissors.css("height", "200px") 

  var imgPaper = $("<img>")
  imgPaper.attr("src","img/paper.png")
  imgPaper.css("width", "200px")
  imgPaper.css("height", "200px") 


  if(randum === 0){
    $("#cpu").html("")
    $("#cpu").append(imgRock)
    console.log("Drow")
    $("#fruits_1").html("Drow")
  } else if(randum === 1){
    $("#cpu").html("");
    $("#cpu").append(imgScissors)
      var resultUser = numUser + 1
    userSc.textContent = resultUser
    console.log("YouWin")
    $("#fruits_1").html("YouWin")
  } else if(randum === 2){
    $("#cpu").html("");
    $("#cpu").append(imgPaper)
    var resultCpu = numCpu + 1
    cpuSc.textContent = resultCpu
    console.log("YouLose")
    $("#fruits_1").html("YouLose")
  }
})

//チョキのボタンを押した場合
$("#scissors").on("click", function(){
  var randum = Math.floor(Math.random() * 3);

  console.log(randum, "randum_box")

  //対象クラスを持つh1を習得する
  var userSc = document.querySelector('.score_User')
  var cpuSc = document.querySelector('.score_Cpu')
  // 対象クラスの文字を習得する
  var stringNumUser = userSc.textContent
  var stringNumCpu = cpuSc.textContent
  // 文字を数字化する
  var numUser = parseInt(stringNumUser, 10)
  var numCpu = parseInt(stringNumCpu, 10)

  var imgRock = $("<img>")
  imgRock.attr("src","img/rock.png")
  imgRock.css("width", "200px")
  imgRock.css("height", "200px") 

  var imgScissors = $("<img>")
  imgScissors.attr("src","img/scissors.png")
  imgScissors.css("width", "200px")
  imgScissors.css("height", "200px") 

  var imgPaper = $("<img>")
  imgPaper.attr("src","img/paper.png")
  imgPaper.css("width", "200px")
  imgPaper.css("height", "200px") 

  if(randum === 0){
    $("#cpu").html("")
    $("#cpu").append(imgRock)
    var resultCpu = numCpu + 1
    cpuSc.textContent = resultCpu
    console.log("YouLose")
    $("#fruits_1").html("YouLose")
  } else if(randum === 1){
    $("#cpu").html("")
    $("#cpu").append(imgScissors)
    console.log("Drow")
    $("#fruits_1").html("Drow")
  } else if(randum === 2){
    $("#cpu").html("")
    $("#cpu").append(imgPaper)
    var resultUser = numUser + 1
    userSc.textContent = resultUser
    console.log("YouWin")
    $("#fruits_1").html("YouWin")
  }
})

//パーのボタンを押した場合
$("#paper").on("click", function(){
  var randum = Math.floor(Math.random() * 3);

  console.log(randum, "randum_box")

  //対象クラスを持つh1を習得する
  var userSc = document.querySelector('.score_User')
  var cpuSc = document.querySelector('.score_Cpu')
  // 対象クラスの文字を習得する
  var stringNumUser = userSc.textContent
  var stringNumCpu = cpuSc.textContent
  // 文字を数字化する
  var numUser = parseInt(stringNumUser, 10)
  var numCpu = parseInt(stringNumCpu, 10)

  var imgRock = $("<img>")
  imgRock.attr("src","img/rock.png")
  imgRock.css("width", "200px")
  imgRock.css("height", "200px") 

  var imgScissors = $("<img>")
  imgScissors.attr("src","img/scissors.png")
  imgScissors.css("width", "200px")
  imgScissors.css("height", "200px") 

  var imgPaper = $("<img>")
  imgPaper.attr("src","img/paper.png")
  imgPaper.css("width", "200px")
  imgPaper.css("height", "200px") 

  if(randum === 0){
    $("#cpu").html("")
    $("#cpu").append(imgRock)
    var resultUser = numUser + 1
    userSc.textContent = resultUser
    console.log("YouWin")
    $("#fruits_1").html("YouWin")
  } else if(randum === 1){
    $("#cpu").html("")
    $("#cpu").append(imgScissors)
    var resultCpu = numCpu + 1
    cpuSc.textContent = resultCpu
    console.log("YouLose")
    $("#fruits_1").html("YouLose")
  } else if(randum === 2){
    $("#cpu").html("")
    $("#cpu").append(imgPaper)
    console.log("Drow")
    $("#fruits_1").html("Drow")
  }
})

//リセットのボタンを押した場合
$("#reset").on("click", function(){
  //対象クラスを持つh1を習得する
  var userSc = document.querySelector('.score_User')
  var cpuSc = document.querySelector('.score_Cpu')
  // 対象クラスの文字を習得する
  var stringNumUser = userSc.textContent
  var stringNumCpu = cpuSc.textContent
  // 文字を数字化する
  var numUser = parseInt(stringNumUser, 10)
  var numCpu = parseInt(stringNumCpu, 10)

  var resultUser = numUser * 0
  var resultCpu = numCpu * 0

  userSc.textContent = resultUser
  cpuSc.textContent = resultCpu

  $("#fruits_1").html("結果はこちら")
  $("#cpu").trigger("reset");

  alert("リセット完了")

  console.log("リセット完了")
})



// var scoreTable = {
//   rock: 0
//   scissors: 1
//   paper: 3
// }