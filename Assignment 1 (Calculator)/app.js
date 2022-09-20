function cal(b){
    var a = document.getElementById('abc')
    a.value += b
}

function ans(){
    var m = document.getElementById('abc')
    m.value = eval(m.value)
}

function clr(){
    var c = document.getElementById('abc')
    c.value = ''
}
