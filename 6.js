let number = parseInt(prompt("hay nhap so"));
let result;
// if (number > 0) {
//   alert("1");
// } else if (number < 0) {
//   alert("-1");
// } else {
//   alert("0");
// }

switch (true) {
  case number > 0:
    result = 1;
    break;

  case number < 0:
    result = -1;
    break;
  default:
    result = 0;
    break;
}
alert(result);
