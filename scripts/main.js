

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

function iphone14() {
    document.getElementById(`notch`).classList.remove('notch');
    document.getElementById(`notch`).classList.add('notch-i14');

    document.getElementById(`camera`).classList.remove('notch');
    document.getElementById(`camera`).classList.add('camera-i14');

    document.getElementById(`speaker`).classList.remove('notch');
    document.getElementById(`speaker`).classList.add('speaker-i14');
    
}