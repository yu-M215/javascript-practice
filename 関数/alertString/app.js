// メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString)

function addString(strA) {
  let addStr = "Hello " + strA;
  return addStr;
}