var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
//var remove = document.querySelector("#remove")
var check = 0;
btn.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML = "Friend";
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"

    check = 1;
}
else{
    istatus.innerHTML = "Stranger";
    istatus.style.color = "Red"
    btn.innerHTML = "Friend"

    check = 0;
}


})

