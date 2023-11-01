// alert(11111)

// 演習1
console.log("はじめてのジャバスクリプト")

// 演習2
console.log(23+5)
console.log(2000-1800)
console.log("18+5")

var age = 36
var name = "JEONG"
console.log(age, "ageの箱")
console.log(name, "nameの箱")

// 変数の演習

var gs = "jsの授業中"
console.log(gs, "gsの箱")

// if=条件に応じた処理を分けること
// if(nam === 10){
//   //処理をするコードを記述する
//   //今回はコンスールログを使います  
//   console.log("10が出ましたよ")
// } else {
//   console.log("10以外が出ましたよ")
// }

var nam = 12

if(nam === 10){
  //処理をするコードを記述する
  //今回はコンスールログを使います  
  console.log("10が出ましたよ", "nambox")
} else if(nam === 11) {
  console.log("11が出ましたよ", "nambox")
} else if(nam === 12) {
  console.log("12が出ましたよ", "nambox")
} else if(nam === 13) {
  console.log("13が出ましたよ", "nambox")
}

// 演習4

var point = 90;
if(point >= 80){
  console.log("素晴らしい！おめでとう！", "pointbox")
} else {
  console.log("もっと頑張りましょう", "pointbox")
}

//jsのおまじないの練習 (魔法だと思ってください)
var randum = Math.floor(Math.random() * 5);
// 0 ~ 4 計５パターンのランダム機能があるがスクリプトできる
console.log(randum, "randum_box")

if(randum === 0){
  console.log("大吉")
} else if(randum === 1){
  console.log("中吉")
} else if(randum === 2){
  console.log("正吉")
} else if(randum === 3){
  console.log("吉")
} else if(randum === 4){
  console.log("末")
}

//jQuery練習

$("h1").on("click", function(){
  // $("h1")
  // .html("変化")
  // .css("color","green")
  // .fadeOut(3000)
  // .fadeIn(3000)
  // .append("テスト");

  var randum = Math.floor(Math.random() * 5);

  console.log(randum, "randum_box")

  if(randum === 0){
    console.log("大吉")
    $("h1").html("大吉")
  } else if(randum === 1){
    console.log("中吉")
    $("h1").html("中吉")
  } else if(randum === 2){
    console.log("小吉")
    $("h1").html("小吉")
  } else if(randum === 3){
    console.log("吉")
    $("h1").html("吉")
  } else if(randum === 4){
    console.log("末")
    $("h1").html("末")
  }

  // 下は消さない
})











