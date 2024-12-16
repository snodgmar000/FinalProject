//with help from w3 school
function checkPassword(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    console.log(user);
    console.log(pass);
    if(pass === "TcG!R1ft_2020$" && user === "RealityAvoid64" ){
        window.location.href = "File:///C:/Users/mgsno/Documents/WebDesign/FinalProject/extrainfo.html";
    } else{
    alert("Password not correct");
    }
}
