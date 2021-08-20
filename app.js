//List of characters
const numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const letterChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const letterMajChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//IBM® Business Automation Workflow special Char
const specialChar = ['!', '"', '#', '$', '%', '(', ')', '*', '+', ',', '-', '.', ':', ';', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];
const dangerChar = [ "'", '\\', '/', '<', '>', '|',];

const listChar = [];
//Elements
const res = document.getElementById('result');
const size = document.getElementById('size');
const sizenum = document.getElementById('sizenum');
const number = document.getElementById('num');
const letter = document.getElementById('letter');
const letterMaj = document.getElementById('letterMaj');
const special = document.getElementById('special');
const danger = document.getElementById('danger');

//Size of the password
size.addEventListener('change', () => {
    if (size.value > 120) size.value = 120;
    console.log(size.value);
    sizenum.value = size.value;
    password(size.value);
});

sizenum.addEventListener('change', () => {
    if (sizenum.value > 120) sizenum.value = 120;
    console.log(sizenum.value);
    size.value = sizenum.value;
    password(sizenum.value);
});

//Settings of the password

function numberIN() {
    if (number.checked == true){
        console.log('Add number to the list');
        for (let i = 0; i < numberChar.length; i++) {
            listChar.push(numberChar[i]);  
            password(size.value);          
        }
    } else {
        console.log('Remove number to the list');
        for (let i = 0; i < numberChar.length; i++) {
            listChar.pop(numberChar[i]);
            password(size.value);
        }
    }
}

function letterIN() {
    if (letter.checked == true){
        console.log('Add letter to the list');
        for (let i = 0; i < letterChar.length; i++) {
            listChar.push(letterChar[i]);
            password(size.value);            
        }
    } else {
        console.log('Remove letter to the list');
        for (let i = 0; i < letterChar.length; i++) {
            listChar.pop(letterChar[i]);
            password(size.value);            
        }
    }
}

function letterMajIN() {
    if (letterMaj.checked == true){
        console.log('Add letterMaj to the list');
        for (let i = 0; i < letterMajChar.length; i++) {
            listChar.push(letterMajChar[i]);
            password(size.value);           
        }
    } else {
        console.log('Remove letterMaj to the list');
        for (let i = 0; i < letterMajChar.length; i++) {
            listChar.pop(letterMajChar[i]);
            password(size.value);          
        }
    }
}

function specialIN() {
    if (special.checked == true){
        console.log('Add special to the list');
        for (let i = 0; i < specialChar.length; i++) {
            listChar.push(specialChar[i]);
            password(size.value);           
        }
    } else {
        console.log('Remove special to the list');
        for (let i = 0; i < specialChar.length; i++) {
            listChar.pop(specialChar[i]);
            password(size.value);            
        }
    }
}

function dangerIN() {
    if (danger.checked == true){
        console.log('Add dangerous characters to the list');
        for (let i = 0; i < dangerChar.length; i++) {
            listChar.push(dangerChar[i]);    
            password(size.value);        
        }
    } else {
        console.log('Remove dangerous characters to the list');
        for (let i = 0; i < dangerChar.length; i++) {
            listChar.pop(dangerChar[i]); 
            password(size.value);           
        }
    }
}

//Random Password

function password(size) {
    let password = [];

    for (let i = 0; i < size; i++) {
        password.push(listChar[(Math.floor(Math.random() * listChar.length))]);
    }
    console.log(password);
    res.innerHTML = `<p style="display: ;">${password.join('')}</p>`;
}

//Copy the password
function copy() {
    navigator.clipboard.writeText(res.innerText);
    document.getElementById('confirm').classList.remove('hidden')
    setInterval(function(){
        document.getElementById('confirm').classList.add('hidden');
    }, 4000)
}

//Initialisation
numberIN();
letterIN();
letterMajIN();
specialIN();
dangerIN();