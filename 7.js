// let a = parseInt(prompt("a= "));
// let b = parseInt(prompt("b = "));
// x = a + b < 4 ? "Below" : "Over";
// document.write(x);
let result = "";
let message = prompt("hãy nhập chuỗi : ");
result = message == "Emoployee" ? "Hello" : result;
result = message == "Director" ? "Greetings" : result;
result = message == "" ? "No login" : result;

document.write(result);
