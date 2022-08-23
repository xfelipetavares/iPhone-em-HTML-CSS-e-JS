

function nada(){
    alert(`Nada aqui ainda, curioso(a) 👀`)
}

function goHome(){
    document.getElementById(`iphone`).classList.remove('dialer');
}
function dialer(){
    document.getElementById(`iphone`).classList.add('dialer');
}


function time(){
    var clock_phone = document.getElementById(`clock-phone`);
    var now = new Date();
    var horas = now.getHours();
    var minutos = now.getMinutes();
    clock_phone.innerHTML = `${horas}:${minutos}`

    requestAnimationFrame(time)
    

}