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


const themeNow = localStorage.getItem('theme',)

if( themeNow == null){
    localStorage.setItem('theme', 'black')
}else{
    themeNow
}

if(themeNow == 'white'){
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

function toWhiteTheme(){
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

    localStorage.setItem('theme', 'white')
    return
}

function toDarkTheme(){

    header.classList.remove('whiteTheme')
    body.classList.remove("whiteTheme")
    videoContainer.forEach( Element => Element.classList.remove('whiteThemeTitle'))
    videoInfos.forEach( Element => Element.classList.remove('whiteThemeInfos'))
    mainTitle.classList.remove('whiteThemeTitle')
    videoInfoText.forEach( Element => Element.classList.remove('whiteThemeTitle'))

    mainChannelName.classList.remove('whiteThemeTitle')
    views.classList.remove('whiteThemeInfos')
    videoPlayer.classList.remove('whiteThemeTitle')

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')

    localStorage.setItem('theme', 'black')
    return
}
