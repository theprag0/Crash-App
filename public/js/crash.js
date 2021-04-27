const urlParams = new URLSearchParams(window.location.search);
const crash = document.querySelector('#crash'),
    loader = document.querySelector('#loader');

// Decode base-64 encoded string
let trollText = urlParams.get('troll-text');
let trollImg = urlParams.get('troll-img') && window.location.href.split('troll-img=')[1].split('&troll-time')[0];
let trollTime = urlParams.get('troll-time');
let closeTime = trollTime === null ? 3600 : parseFloat(trollTime) * 1000;

setTimeout(function(){
    loader.style.display = 'none';
    crash.innerHTML = (trollImg && trollText) === null ? 
    '<p>You are fat.</p> <img src="./public/assets/Trollface.svg" class="meme"/>'
    : `<p>${atob(trollText)}</p> <img src="${atob(trollImg)}" class="meme"/>`
},3000);

setTimeout(function(){
    window.close();
}, closeTime);