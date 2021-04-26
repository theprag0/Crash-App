const createForm = document.querySelector('#create'),
    genLink = document.querySelector('#gen-link'),
    genUrl = document.querySelector('#gen-url'),
    textInput = document.querySelector('#troll-text'),
    imgInput = document.querySelector('#troll-img'),
    urlParams = new URLSearchParams(window.location.search);

let trollText, trollImg

// Encrypt user input with base-64
createForm.addEventListener('submit', (evt) => {
    textInput.value = btoa(textInput.value);
    imgInput.value = btoa(imgInput.value);
})

if (urlParams.has('troll-text') && urlParams.has('troll-img')) {
    trollText = urlParams.get('troll-text');
     trollImg = urlParams.get('troll-img');
    
    if (trollText.length !== 0 && trollImg.length !== 0) {
        genLink.style.display = 'block';
        genUrl.innerText = window.location.href.replace('create.html','index.html'); 
    }
}

// Copy link function
document.querySelector("#copy").onclick = function(){
    document.querySelector("#gen-url").select();
    document.execCommand('copy');
}