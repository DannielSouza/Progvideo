const header = document.querySelector(".header")
const body = document.getElementById('body')
const btnMoon = document.getElementById('btnMoon')
const btnSun = document.getElementById('btnSun')

const videoContainer = document.querySelectorAll('.videoTitle')
const videoInfos = document.querySelectorAll('.videoChannelName, .videoMetadata')
const mainTitle = document.querySelector('.titleVideo > h1')
const mainChannelName = document.querySelector('.profileInfo p')


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
    header.classList.add('whiteTheme')
    body.classList.add("whiteTheme")
    videoContainer.forEach( Element => Element.classList.add('whiteThemeTitle'))
    videoInfos.forEach( Element => Element.classList.add('whiteThemeInfos'))
    mainTitle.classList.add('whiteThemeTitle')
    videoInfoText.forEach( Element => Element.classList.add('whiteThemeTitle'))
    views.classList.add('whiteThemeInfos')
    videoPlayer.classList.add('whiteThemeTitle')
    mainChannelName.classList.add('whiteThemeTitle')

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')
}



function toWhiteTheme(){
    if(localStorage.key('theme' == 'black')){
    header.classList.add('whiteTheme')
    body.classList.add("whiteTheme")
    videoContainer.forEach( Element => Element.classList.add('whiteThemeTitle'))
    videoInfos.forEach( Element => Element.classList.add('whiteThemeInfos'))
    mainTitle.classList.add('whiteThemeTitle')
    videoInfoText.forEach( Element => Element.classList.add('whiteThemeTitle'))
    views.classList.add('whiteThemeInfos')
    videoPlayer.classList.add('whiteThemeTitle')
    mainChannelName.classList.add('whiteThemeTitle')

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')
    
    localStorage.setItem('theme', 'white')
    return
    }
}

function toDarkTheme(){
    if(localStorage.key('theme' == 'black')){
    header.classList.remove('whiteTheme')
    body.classList.remove("whiteTheme")
    videoContainer.forEach( Element => Element.classList.remove('whiteThemeTitle'))
    videoInfos.forEach( Element => Element.classList.remove('whiteThemeInfos'))
    mainTitle.classList.remove('whiteThemeTitle')
    videoInfoText.forEach( Element => Element.classList.remove('whiteThemeTitle'))
    views.classList.remove('whiteThemeInfos')
    videoPlayer.classList.remove('whiteThemeTitle')
    mainChannelName.classList.remove('whiteThemeTitle')

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')

    localStorage.setItem('theme', 'black')
    return
    }
}
