window.document.getElementById('sp1').addEventListener('click', clicker)

function clicker(){
    window.document.getElementById('asidediv').style.display = "flex"
    window.document.getElementById('asidediv').style.animationName = "app"
    window.document.getElementById('asidediv').style.animationDuration = ".3s"
    window.document.getElementById('asidediv').style.opacity = "1"
    window.document.getElementById('p1').style.animationName ="slide"
    window.document.getElementById('p1').style.animationDuration = ".3s"
    // window.document.getElementById('asidediv').style.animationName = "app"
    window.document.getElementById('p1').style.opacity ="0"
    // window.document.getElementById('img-fixer').style.display ="none"
    window.document.getElementById('p1').style.zIndex ="-10"
}

window.document.getElementsByClassName('aside-imgs')[0].addEventListener('click', imgs)
function imgs(){
    window.document.getElementById('sec1').style.zIndex = "101"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "green"
    window.document.getElementsByClassName('aside-imgs')[0].style.transition = "all .3s"

    for(var counter = 1; counter<11; counter++ ){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }

}

window.document.getElementsByClassName('aside-imgs')[1].addEventListener('click', img1)
function img1(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[1].style.backgroundColor = "orange"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var counter = 2; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    
    
}

window.document.getElementsByClassName('aside-imgs')[2].addEventListener('click', img2)
function img2(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[2].style.backgroundColor = "lightblue"
    window.document.getElementsByClassName('aside-imgs')[2].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 1; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 3; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[3].addEventListener('click', img3)
function img3(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[3].style.backgroundColor = "orange"
    window.document.getElementsByClassName('aside-imgs')[3].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 2; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 4; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[4].addEventListener('click', img4)
function img4(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[4].style.backgroundColor = "white"
    window.document.getElementsByClassName('aside-imgs')[4].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 3; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 5; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[5].addEventListener('click', img5)
function img5(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[5].style.backgroundColor = "rgb(49, 53, 44)"
    window.document.getElementsByClassName('aside-imgs')[5].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 4; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 6; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[6].addEventListener('click', img6)
function img6(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[6].style.backgroundColor = "white"
    window.document.getElementsByClassName('aside-imgs')[6].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 5; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 7; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[7].addEventListener('click', img7)
function img7(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[7].style.backgroundColor = "red"
    window.document.getElementsByClassName('aside-imgs')[7].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 6; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 8; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[8].addEventListener('click', img8)
function img8(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "201"
    window.document.getElementById('sec10').style.zIndex = "-201"
    window.document.getElementsByClassName('aside-imgs')[8].style.backgroundColor = "brown"
    window.document.getElementsByClassName('aside-imgs')[8].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 7; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 9; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}

window.document.getElementsByClassName('aside-imgs')[9].addEventListener('click', img9)
function img9(){
    window.document.getElementById('sec1').style.zIndex = "-201"
    window.document.getElementById('sec2').style.zIndex = "-201"
    window.document.getElementById('sec3').style.zIndex = "-201"
    window.document.getElementById('sec4').style.zIndex = "-201"
    window.document.getElementById('sec5').style.zIndex = "-201"
    window.document.getElementById('sec6').style.zIndex = "-201"
    window.document.getElementById('sec7').style.zIndex = "-201"
    window.document.getElementById('sec8').style.zIndex = "-201"
    window.document.getElementById('sec9').style.zIndex = "-201"
    window.document.getElementById('sec10').style.zIndex = "201"
    window.document.getElementsByClassName('aside-imgs')[9].style.backgroundColor = "white"
    window.document.getElementsByClassName('aside-imgs')[9].style.transition = "all .3s"
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    for(var ocounter = 8; ocounter > 0; --ocounter){
        window.document.getElementsByClassName('aside-imgs')[ocounter].style.backgroundColor = "#1e1d20"
    }
    for(var counter = 10; counter<11; counter++){
        window.document.getElementsByClassName('aside-imgs')[counter].style.backgroundColor = "#1e1d20"
    }
    window.document.getElementsByClassName('aside-imgs')[0].style.backgroundColor = "#1e1d20"
    window.document.getElementsByClassName('aside-imgs')[1].style.transition = "all .3s"
    window.document.getElementById('sec1').style.zIndex = "1000"
}