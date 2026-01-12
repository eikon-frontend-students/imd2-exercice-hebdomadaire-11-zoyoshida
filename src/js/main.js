var likeBtn = document.querySelector("#likeBtn")
var stat = document.querySelector("#stat")
var statCurrent = 147

likeBtn.addEventListener("click", function(){

    console.log("bop")

    if (likeBtn.classList.contains("is-activated")){
        setTimeout (() => {likeBtn.classList.toggle("is-activated");}, 4000);
        console.log("bip");
        statCurrent += 1;
        console.log(statCurrent)
        stat.textContent = statCurrent; 
    }
    else {
        likeBtn.classList.toggle("is-activated");
    }
})