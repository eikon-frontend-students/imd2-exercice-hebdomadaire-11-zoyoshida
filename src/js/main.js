var likeBtn = document.querySelector("#likeBtn")
var stat = document.querySelector("#stat")
var statCurrent = 147

likeBtn.addEventListener("click", function(){
    likeBtn.classList.toggle("is-activated");
    console.log("bop")

    if (likeBtn.classList.contains("is-activated")){
        console.log("bip");
        statCurrent += 1;
        console.log(statCurrent)
        stat.textContent = statCurrent; 
    }
})