function login()
{   
    let a = username.value
    let b = password.value
    if (a == "kimngan" && b == "200907")
    {   
        window.open("home.html")
        document.getElementById(compiler).style.display="block";
    }
    else 
        document.write("Không hợp lệ")
}