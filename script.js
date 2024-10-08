
let charlower = 'abcdefghijklmnopqrstuvwxyz'
let charupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let charnumbers = '0123456789'
let charsymbols = '?*!$%&/()+'

let lower = 0
let upper = 0
let numbers = 0
let symbols = 0

strength();


function getResults(){
    //Getting checkbox results
    if (document.getElementById('lowercase').checked == true){
        lower = 1
    }else{
        lower = 0
    }
    if (document.getElementById('uppercase').checked == true){
        upper = 1
    }else{
        upper = 0
    }
    if (document.getElementById('numbers').checked == true){
        numbers = 1
    }else{
        numbers = 0
    }
    if (document.getElementById('symbols').checked == true){
        symbols = 1
    }else{
        symbols = 0
    }
}


document.getElementById('lowercase').addEventListener('change', () => {
    getResults()
    strength()
})
document.getElementById('uppercase').addEventListener('change', () => {
    getResults()
    strength()
})
document.getElementById('numbers').addEventListener('change', () => {
    getResults()
    strength()
})
document.getElementById('symbols').addEventListener('change', () => {
    getResults()
    strength()
})
document.getElementById('number').addEventListener('change', () => {
    getResults()
    strength()
})


document.getElementById('submit').onclick = function(){

    characters = ''

    //Getting checkbox results
    if (document.getElementById('lowercase').checked == true){
        lower = 1
        characters += charlower
    }
    if (document.getElementById('uppercase').checked == true){
        upper = 1
        characters += charupper
    }
    if (document.getElementById('numbers').checked == true){
        numbers = 1
        characters += charnumbers
    }
    if (document.getElementById('symbols').checked == true){
        symbols = 1
        characters += charsymbols
    }

    if (characters != ''){
        password = []
        for (let i = 0; i < document.getElementById('number').value; i++){
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        document.getElementById('generated').innerHTML = password
    } else{
        document.getElementById('generated').innerHTML = 'No characters chosen!'
    }
}

document.getElementById('number').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("submit").click();
    }
  });



function strength(){
    let l = document.getElementById('number').value
    let strengthValue = "";
    let strengthColor = "";
    if (l <= 10){
        strengthValue = 'WEAK'
        strengthColor = 'red'
    } else if (l < 15){
        if (symbols == 1 && upper == 1 && lower == 1){
            strengthValue = 'MEDIUM'
            strengthColor = 'yellow'
        } else{
            strengthValue = 'WEAK'
            strengthColor = 'red'
        }
    } else{
        if (symbols == 1 && upper == 1 && lower == 1 && numbers == 1){
            strengthValue = 'STRONG'
            strengthColor = 'green'
        } else{
            strengthValue = 'MEDIUM'
            strengthColor = 'yellow'
        }
    }
    document.getElementById('strength').innerText = strengthValue;
    document.getElementById('strength').style.color = strengthColor;
}




//Copy text to clipboard
const copyBtn = document.getElementById('copybtn')
copyBtn.onclick = function myFunction() {
    var copyText = document.getElementById("generated");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}