const header = document.querySelector(".header")
const body = document.getElementById('body')
const btnMoon = document.getElementById('btnMoon')
const btnSun = document.getElementById('btnSun')

const videoContainer = document.querySelectorAll('.videoTitle')
const videoInfos = document.querySelectorAll('.videoChannelName, .videoMetadata')
const mainTitle = document.querySelector('.titleVideo > h1')
const mainChannelName = document.querySelector('.profileInfo > p')
const views = document.querySelector('.views p')
const videoPlayer = document.querySelector('.videoPlayer h2')
const videoInfoText = document.querySelectorAll('.videoInfoText')

function changeTheme(){
    header.classList.toggle('whiteTheme')
    body.classList.toggle("whiteTheme")
    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')
    

    videoContainer.forEach( Element => Element.classList.toggle('whiteThemeTitle'))
    videoInfos.forEach( Element => Element.classList.toggle('whiteThemeInfos'))
    mainTitle.classList.toggle('whiteThemeTitle')
    videoInfoText.forEach( Element => Element.classList.toggle('whiteThemeTitle'))

    mainChannelName.classList.toggle('whiteThemeTitle')
    views.classList.toggle('whiteThemeInfos')
    videoPlayer.classList.toggle('whiteThemeTitle')
}
