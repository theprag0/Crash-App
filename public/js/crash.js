const urlParams = new URLSearchParams(window.location.search);
const crash = document.querySelector('#crash'),
    loader = document.querySelector('#loader');

// Decode base-64 encoded string
let trollText = urlParams.get('troll-text');
let trollImg = window.location.href.split('troll-img=')[1];

setTimeout(function(){
    loader.style.display = 'none';
    crash.innerHTML = (trollImg && trollText) === undefined ? 
    '<p>You are fat.</p> <img src="./public/assets/Trollface.svg" class="meme"/>'
    : `<p>${atob(trollText)}</p> <img src="${atob(trollImg)}" class="meme"/>`
},3000);

setTimeout(function(){
    window.close();
},3600);