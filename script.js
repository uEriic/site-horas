function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var saudacao = document.getElementById('saudacao')
    var horario = document.getElementById('horario')
    var div = document.getElementById('div')
    var bg = document.getElementById('body')
    if (hora <= 12) {
        saudacao.innerHTML = 'Bom dia!'
        div.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
        div.innerHTML += '<img src="src/images/manha.jpg" alt="Manha">'
        bg.style.background = '#f0e68c'
    } else if (hora <= 18) {
        saudacao.innerHTML = 'Boa tarde!'
        div.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
        div.innerHTML += '<img src="src/images/tarde.jpg" alt="Tarde">'
        bg.style.background = '#a0522d'
    } else {
        saudacao.innerHTML = 'Boa noite!'
        div.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
        div.innerHTML += '<img src="src/images/noite.jpg" alt="Noite">'
        bg.style.background = '#191970'
    }
}