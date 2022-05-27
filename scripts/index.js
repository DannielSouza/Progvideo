const header = document.querySelector(".header")
const categories = document.querySelector(".categories")
const videosContainer = document.querySelector(".videos")
const videoTitle = document.querySelectorAll(".videoTitle")
const body = document.getElementById('body')
const videoChannelName = document.querySelectorAll('.videoDetails > .videoChannelName')
const videoDetailsInfos = document.querySelectorAll('.videoDetails > .videoMetadata')
const btnMoon = document.getElementById('btnMoon')
const btnSun = document.getElementById('btnSun')

const themeNow = localStorage.getItem('theme',)

if( themeNow == null){
    localStorage.setItem('theme', 'black')
}else{
    themeNow
}

if(themeNow == 'white'){
    header.classList.add('whiteTheme')
    categories.classList.add('whiteTheme')
    videosContainer.classList.add('whiteTheme')
    body.classList.add("whiteTheme")
    videoChannelName.forEach( Element => Element.classList.add('whiteThemeInfos'))
    videoDetailsInfos.forEach( Element => Element.classList.add('whiteThemeInfos'))
    videoTitle.forEach( Element => Element.classList.add('whiteThemeTitle'))

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')
}



function toWhiteTheme(){
    if(localStorage.key('theme' == 'black')){
    header.classList.add('whiteTheme')
    categories.classList.add('whiteTheme')
    videosContainer.classList.add('whiteTheme')
    body.classList.add("whiteTheme")
    videoChannelName.forEach( Element => Element.classList.add('whiteThemeInfos'))
    videoDetailsInfos.forEach( Element => Element.classList.add('whiteThemeInfos'))
    videoTitle.forEach( Element => Element.classList.add('whiteThemeTitle'))

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')

    localStorage.setItem('theme', 'white')
    return
    }
}

    function toDarkTheme(){


    if(localStorage.key('theme' == 'black')){
    header.classList.remove('whiteTheme')
    categories.classList.remove('whiteTheme')
    videosContainer.classList.remove('whiteTheme')
    body.classList.remove("whiteTheme")
    videoChannelName.forEach( Element => Element.classList.remove('whiteThemeInfos'))
    videoDetailsInfos.forEach( Element => Element.classList.remove('whiteThemeInfos'))
    videoTitle.forEach( Element => Element.classList.remove('whiteThemeTitle'))

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')

    localStorage.setItem('theme', 'black')
    return
    }

}