function adicionarMemoria(){
    window.location.href = "adicionarMemoria.html"
}
function voltarMenu(){
    window.location.href = "index.html"
}



function criarNovaMemoria(){
    let linkImg = (document.querySelector("#linkImg").value)
    let dataColetada = (document.querySelector("#dataMemoria").value)
    let titulo = (document.querySelector("#tituloMemoria").value)
    let descricao = (document.querySelector("#descricaoAcidionar").value)
    let cartaoCriado = `
    <div class="card">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>${dataColetada}</p>
            <h1>${titulo}</h1>
            <img src="${linkImg}" alt="Imagem 01">
            <p>${descricao}</p>
        </div>
    `
    
    console.log(dataColetada)
    // console.log(titlo)
    // console.log(descricao)
    document.querySelector(".containerJornada").innerHTML = cartaoCriado
}