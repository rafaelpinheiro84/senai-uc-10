 document.onreadystatechange = x => {
    //Menu de Barras com JS
    const btnMobile = document.getElementById('btn-mobile');
    
    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault()
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }
    
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    
    //DOM- Document Object Model
    // regex -expressoes regulares
}

function contarProdutos() {
    //contador carrinho
    let numeroProdutos = 0
    // numeroProdutos = 1
    //  numeroProdutos = 1
    let marcador = document.getElementById("marcador");
    numeroProdutos = numeroProdutos + 1
    console.log(numeroProdutos)

    marcador.innerText = numeroProdutos;
    // marcador.innerHtml = numeroProdutos;
}


//window.alert("teste");
function mostrarPopup() {
    window.alert("Hello World")
}

function enviarEmail() {
    let email = document.getElementById("campo-email");
    let mensagem = document.getElementById("campo-mensagem");

    console.log("e-mail: " + email.value + " | mensagem: " + mensagem.value)
}