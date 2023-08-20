let email;

function emailcheck(email){
    let arrobasexistent = false;
    for (let i = 0; i<email.length; i++){
        if(email.charAt(i) == '@'){
            arrobasexistent = true;
        }
    }
    if (arrobasexistent){
        return true;
    } else {
        return false;
    }
}
document.getElementById("subscribebutton").addEventListener("click", ()=>{
    email = document.getElementById("email").value;
    if (emailcheck(email)) {
        document.getElementById("subscribed").style.display = "block";
        document.getElementById("container").style.display = "none";
        document.getElementById("inputemail").textContent = email;
    } else {
        document.getElementById("invalidemailtext").style.visibility = "visible";
        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.backgroundColor = "hsl(5,100%,95%)";
        document.getElementById("email").style.borderColor = "rgb(211, 62, 62)" ;
    }
})

document.getElementById("dismissmessage").addEventListener("click", ()=>{
    document.getElementById("subscribed").style.display = "none";
    document.getElementById("container").style.display = "grid";
    document.getElementById("invalidemailtext").style.visibility = "hidden";
    document.getElementById("email").style.color = "black";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("email").style.borderColor = "black";
})