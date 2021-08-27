const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const javascript = document.getElementById('javascript')
const mongodb = document.getElementById('mongodb')
const react = document.getElementById('react')


function move(){
    ///console.log("I have scroll")
    const incrementar = window.scrollY

    /* The '20' refers to the height from the botton of the sky section. We added this in 
    the css file. feel free to move all stylling to the JS file if you prefer to keep the 
    '20' consistent */

    balloon.style.bottom = 15 + incrementar * 0.19 + '%'
    cloudOne.style.bottom = 40 + incrementar * 0.12 + '%'
    cloudOne.style.marginLeft = 80 + incrementar * 0.1 + '%'
    cloudTwo.style.bottom = 75 + incrementar * 0.15 + '%'
    cloudTwo.style.marginLeft = 60 + incrementar * 0.14 + '%'
    cloudThree.style.bottom = 60 + incrementar * 0.11 + '%'
    cloudThree.style.marginRight = 80 + incrementar * 0.12 + '%'
    cloudFour.style.bottom = 70 + incrementar * 0.20 + '%'
    cloudFour.style.marginRight = 35 + incrementar * 0.09 + '%'
    cloudFive.style.bottom = 50 + incrementar * 0.20 + '%'
    cloudFive.style.marginLeft = 10 + incrementar * 0.1 + '%'
    javascript.style.marginRight = 35 + incrementar * 0.25 + '%'
    react.style.marginRight = 65 + incrementar * 0.30 + '%'
    mongodb.style.marginLeft = 65 + incrementar * 0.15 + '%'
}

window.addEventListener('scroll', move)


