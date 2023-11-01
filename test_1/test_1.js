// ボタンを押すとCPUのジャンケンが先に表示される
$("#start").on("click", function(){
  var randum = Math.floor(Math.random() * 3);

  console.log(randum, "randum_box")

  var imgRock = $("<img>")
  imgRock.attr("src","../img/rock.png")
  imgRock.css("width", "200px")
  imgRock.css("height", "200px") 

  var imgScissors = $("<img>")
  imgScissors.attr("src","../img/scissors.png")
  imgScissors.css("width", "200px")
  imgScissors.css("height", "200px") 

  var imgPaper = $("<img>")
  imgPaper.attr("src","../img/paper.png")
  imgPaper.css("width", "200px")
  imgPaper.css("height", "200px") 


  if(randum === 0){
    $("#cpu").html("")
    $("#cpu").append(imgRock)
    console.log("rock")
  } else if(randum === 1){
    $("#cpu").html("");
    $("#cpu").append(imgScissors)
    console.log("scissers")
  } else if(randum === 2){
    $("#cpu").html("");
    $("#cpu").append(imgPaper)
    console.log("paper")
  }
})

//USERがそれに勝つジャンケンボタンを押す

//あたり・ハズレのジャッジを出す










// $("#rock").on("click", function(){
//   var randum = Math.floor(Math.random() * 3);

//   console.log(randum, "randum_box")

//   //対象クラスを持つh1を習得する
//   var userSc = document.querySelector('.score_User')
//   var cpuSc = document.querySelector('.score_Cpu')
//   // 対象クラスの文字を習得する
//   var stringNumUser = userSc.textContent
//   var stringNumCpu = cpuSc.textContent
//   // 文字を数字化する
//   var numUser = parseInt(stringNumUser, 10)
//   var numCpu = parseInt(stringNumCpu, 10)

//   var imgRock = $("<img>")
//   imgRock.attr("src","img/rock.png")
//   imgRock.css("width", "200px")
//   imgRock.css("height", "200px") 

//   var imgScissors = $("<img>")
//   imgScissors.attr("src","img/scissors.png")
//   imgScissors.css("width", "200px")
//   imgScissors.css("height", "200px") 

//   var imgPaper = $("<img>")
//   imgPaper.attr("src","img/paper.png")
//   imgPaper.css("width", "200px")
//   imgPaper.css("height", "200px") 


//   if(randum === 0){
//     $("#cpu").html("")
//     $("#cpu").append(imgRock)
//     console.log("Drow")
//     $("#fruits_1").html("Drow")
//   } else if(randum === 1){
//     $("#cpu").html("");
//     $("#cpu").append(imgScissors)
//       var resultUser = numUser + 1
//     userSc.textContent = resultUser
//     console.log("YouWin")
//     $("#fruits_1").html("YouWin")
//   } else if(randum === 2){
//     $("#cpu").html("");
//     $("#cpu").append(imgPaper)
//     var resultCpu = numCpu + 1
//     cpuSc.textContent = resultCpu
//     console.log("YouLose")
//     $("#fruits_1").html("YouLose")
//   }
// })
