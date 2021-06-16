window.document.getElementById('wi').addEventListener('mouseenter', ani)
function ani(){
    window.document.getElementById('info').style.animationName = 'slidein'
    window.document.getElementById('info').style.left = '350px'
    window.document.getElementById('info').style.animationName = 'slidein'
    window.document.getElementsByTagName('main').style.opacity = '.25'
}

window.document.getElementById('wi').addEventListener('mouseleave', anileave)
function anileave(){
    window.document.getElementById('info').style.animationName = 'slideback'
    window.document.getElementById('info').style.left = '-1400px'
    window.document.body.style.opacity = '1'
}