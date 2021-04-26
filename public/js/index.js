//javascript:window.open('./crash.html');
// Show custom link
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('troll-text') && urlParams.has('troll-img')) {
    document.querySelector('#or').style.display = 'none';
    document.querySelector('#land-link').style.display = 'none';
}

// Handle query strings in crash.html url
let trollText = urlParams.get('troll-text');
let trollImg = urlParams.get('troll-img');

let crashUrl = (trollImg && trollText) !== undefined ?
`javascript:window.open("${window.location.href.replace('index.html','crash.html')}")`
: "javascript:window.open('./crash.html')";

document.querySelector('#click').setAttribute('href', crashUrl)