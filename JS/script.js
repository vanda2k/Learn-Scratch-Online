function Register(){

    var arr = document.getElementsByTagName("input")
    const uname = document.getElementById("username")
    const pword = document.getElementById("password")
    const cfpword = document.getElementById("cpassword")
    
    user_name_data = uname.value;
    localStorage.setItem("User Name",user_name_data);
    password_data = pword.value;
    localStorage.setItem("Password",password_data);
    confirm_password_data = cfpword.value;
    localStorage.setItem("Confirm Password", confirm_password_data);
    console.log(user_name_data, password_data, confirm_password_data)

    
    alert("Chúc mừng bạn đã tao tài khoản thành công!")

}
function Login(){
    const user = document.getElementById("user")
    const pass = document.getElementById("pass")
    
    console.log(user.value, pass.value);
    if ((user.value == "admin")&& (pass.value =="admin")){
        alert("Dang nhap thanh cong!")
        window.location="../HTML/scratchnc1.html"
    };
    
    if ((localStorage.getItem("User Name") == user.value) && (localStorage.getItem("Password") == pass.value)){
        alert("Chuc mung ban da dang nhap thanh cong!")
        window.location="../HTML/scratchnc1.html"
    }

}