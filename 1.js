let year = parseInt(prompt("Xin mời bạn nhập năm cần kiểm tra"));
console.log(year)

if (year % 4 ==0){
    if (year % 100 ==0){
        if (year % 400 == 0){
            alert("Năm bạn cần kiểm tra là năm nhuận");
        } else {
            alert("Năm bạn cần kiểm tra không phải năm nhuận");
        }
    } else {
        alert("Năm bạn cần kiểm tra là năm nhuận");
    }
} else {
    alert("Năm bạn cần kiểm tra không là năm nhuận");
}