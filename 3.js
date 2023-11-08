let ten = prompt("Mời bạn nhập tên");
if (ten == "admin" ){
    matkhau = prompt("xin mời nhập mật khẩu");
    if (matkhau == "TheMaster"){
        document.write("Wellcom");
    } else if ( matkhau == null){
        document.write("Canceled")
    } else {
        document.write("Wrong password")
    }
} else if ( ten == null){
    document.write("canceld")
} else {
    document.write("I don’t know you")
}