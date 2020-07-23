// add like button event listener

var interacts = document.getElementsByClassName("interact");


for(var i = 0; i < interacts.length; i++){
    // add click listeners to all like buttons
    interacts[i].addEventListener("click",function(){

        // if unliked, change to like and increment count
        if(this.getElementsByTagName("Button")[0].classList.contains("btn-outline-primary")){
            this.getElementsByTagName("Button")[0].classList.remove("btn-outline-primary");
            this.getElementsByTagName("Button")[0].classList.add("btn-danger");
            text = this.getElementsByTagName("span")[0].textContent;
            if(text === ""){
                text = 1;
            }
            else{
                text++;
            }
            this.getElementsByTagName("span")[0].textContent = text;
        }
        // if liked, change to unliked and decrement count
        else if(this.getElementsByTagName("Button")[0].classList.contains("btn-danger")){
            this.getElementsByTagName("Button")[0].classList.remove("btn-danger");
            this.getElementsByTagName("Button")[0].classList.add("btn-outline-primary");
            text = this.getElementsByTagName("span")[0].textContent;
            text--;
            if(text <= "0"){
                text = "";
            }
            this.getElementsByTagName("span")[0].textContent = text;
        }
    });
}

// add view button "coming soon!" ?
// using JQuery, blessed
$('.viewInteract').click(function(){
    console.log("click");
    $(this).children("span").fadeIn(200,function(){
        $(this).delay(1000).fadeOut(1500);
    });
});

