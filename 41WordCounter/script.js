let textbox = document.getElementById("textbox");
let word = document.getElementById("word");
let char = document.getElementById("char");

textbox.addEventListener("input", function(){
    let text = this.value;

    let characters = text.length;
    char.innerHTML = characters;

    text = text.trim()
    let words = text.split(" ");
    let cleaned_list = words.filter(function(elm){
        if(elm != ""){
        return elm
        }
    })
    word.innerHTML = cleaned_list.length;
})
