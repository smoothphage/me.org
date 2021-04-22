let ourButton = document.querySelector('button');
let writeUp = document.querySelector('.write-up');
let isWriteupOpen = false;

ourButton.addEventListener('click', function(){
    if(!isWriteupOpen ) {
        writeUp.style.height = ' auto';
        isWriteupOpen = true;
    } else {
        writeUp.style.height = '0';
        isWriteupOpen = false;
    }
});