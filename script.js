
let charlower = 'abcdefghijklmnopqrstuvwxyz'
let charupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let charnumbers = '0123456789'
let charsymbols = '?*!$%&/()+'

let lower = 0
let upper = 0
let numbers = 0
let symbols = 0

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



//Copy text to clipboard
const copyBtn = document.getElementById('copybtn')
copyBtn.onclick = function myFunction() {
    var copyText = document.getElementById("generated");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}