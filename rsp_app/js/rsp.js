// var imgRsp = document.querySelector("#cpu_r");

// const imagePaths = ["img/rock.png", "img/scissors.png", "img/paper.png"];

// let currentImageIndex = 0;

// // 이미지 요소 선택 getElementById는 # 이 필요없음
// const image = document.getElementById("cpu_rsp");

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

function createRSPImageElement(imageName){
  const rspImage = document.createElement('img')
  rspImage.setAttribute("src","img/" + imageName + ".png")
  rspImage.style.width = "200px"
  rspImage.style.height= "200px"
  return rspImage
}

const ROCK = {img:"img/rock.png"}
const SCISSORS = {img:"img/scissors.png"}
const PAPER = {img:"img/paper.png"}
ROCK.beat = SCISSORS
SCISSORS.beat = PAPER
PAPER.beat = ROCK

let winCount = 0
let loseCount = 0
let drawCount = 0

const hands = [ROCK, SCISSORS, PAPER]

function judgeRSP(myHand, cpuHand){
  if(myHand === cpuHand){
    return 'drow'
  }
  if(myHand.beat === cpuHand){
    return 'win'
  }
  return 'lose'
}
function getCpuHand(){
  const random = Math.floor(Math.random() * 3);
  const cpuHand = hands[random]
  return cpuHand
}
let setTimeoutId = 0
function generateRSPProcedure(hand){
  return function(){
    const cpuHand = getCpuHand()

    //対象クラスを持つh1を習得する
    var userScore = document.querySelector('.score_User')
    var cpuScore = document.querySelector('.score_Cpu')

    // var imgRock = createRSPImageElement("rock")
    // var imgScissors = createRSPImageElement("scissors") 
    // var imgPaper = createRSPImageElement("paper")

    const result = judgeRSP(hand, cpuHand)
    
    $(".animation_container").css("visibility", "hidden");
    $(".result-hand")
      .css("visibility", "unset")
      .attr("src", cpuHand.img)
    if(result === 'drow'){
      console.log("Drow")
      $("#fruits_1").html("Drow")
    } else if(result === 'win'){  
      winCount += 1
      userScore.textContent = winCount
      console.log("YouWin")
      $("#fruits_1").html("YouWin")
    } else if(result === 'lose'){
      loseCount += 1
      cpuScore.textContent = loseCount
      console.log("YouLose")
      $("#fruits_1").html("YouLose")
    }
    clearTimeout(setTimeoutId)
    setTimeoutId = setTimeout(()=>{
      $(".result-hand")
        .css("visibility", "hidden")
      $(".animation_container").css("visibility", "unset");
    }, 2000)
  }
}

//グーのボタンを押した場合
$("#rock").on("click", generateRSPProcedure(ROCK))

//チョキのボタンを押した場合
$("#scissors").on("click",generateRSPProcedure(SCISSORS))

//パーのボタンを押した場合
$("#paper").on("click", generateRSPProcedure(PAPER))

//リセットのボタンを押した場合
$("#reset").on("click", function(){
  //対象クラスを持つh1を習得する
  var userSc = document.querySelector('.score_User')
  var cpuSc = document.querySelector('.score_Cpu')

  winCount = loseCount = 0
  
  userSc.textContent = winCount
  cpuSc.textContent = loseCount

  $("#fruits_1").html("結果はこちら")
  $("#cpu").trigger("reset");

  $(".result-hand")
        .css("visibility", "hidden")
  $(".animation_container").css("visibility", "unset");

  alert("リセット完了")

  console.log("リセット完了")
})