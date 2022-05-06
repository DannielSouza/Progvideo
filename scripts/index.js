const header = document.querySelector(".header")
const categories = document.querySelector(".categories")
const videosContainer = document.querySelector(".videos")
const videoTitle = document.querySelectorAll(".videoTitle")
const body = document.getElementById('body')
const videoChannelName = document.querySelectorAll('.videoDetails > .videoChannelName')
const videoDetailsInfos = document.querySelectorAll('.videoDetails > .videoMetadata')


const btnMoon = document.getElementById('btnMoon')
const btnSun = document.getElementById('btnSun')

function changeTheme(){
    
    header.classList.toggle('whiteTheme')
    categories.classList.toggle('whiteTheme')
    videosContainer.classList.toggle('whiteTheme')
    body.classList.toggle("whiteTheme")
    videoChannelName.forEach( Element => Element.classList.toggle('whiteThemeInfos'))
    videoDetailsInfos.forEach( Element => Element.classList.toggle('whiteThemeInfos'))
    videoTitle.forEach( Element => Element.classList.toggle('whiteThemeTitle'))

    btnMoon.classList.toggle('invisivle')
    btnSun.classList.toggle('invisivle')
}



