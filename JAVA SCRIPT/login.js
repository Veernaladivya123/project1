function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","./visible.png")
}
function hid()
{
    document.getElementById("b").setAttribute("src","./hidden.png")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="1234"
    var email="name@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","./index.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=" "
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("result").innerHTML="Enter the wrong email"
    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Enter the wrong password"
    }
    else{
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Enter the wrong email and password"
    }
}