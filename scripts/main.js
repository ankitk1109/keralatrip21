let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/varkala-beach-kerala.jpg') {
        myImage.setAttribute('src','images/alleppey-in-kerala.jpg');
    } else {
        myImage.setAttribute('src','images/varkala-beach-kerala.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Kerala Trip of ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kerala Trip ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}