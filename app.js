const button = document.querySelector('.logo-inner');
const popUpButton = document.querySelector('.share-button');
const profile = document.querySelector('.profile');
const popUpOverlay = document.querySelector('.pop-up-overlay');


function addSharefeature() {
    profile.classList.add('display-nothing');
    popUpOverlay.classList.remove('display-nothing');
}

function removeSharefeature() {
    profile.classList.remove('display-nothing');
    popUpOverlay.classList.add('display-nothing');
}

button.addEventListener('click', addSharefeature);
popUpButton.addEventListener('click', removeSharefeature);