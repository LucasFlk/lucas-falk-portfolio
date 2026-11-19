
// ATUALIZAR O ANO DO RODAPE

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


// DESTACAR A SECAO SELECIONADA NO MENU

const links = document.querySelectorAll(".menu a");

// Identificar a pagina atual
const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

// Destacar automaticamente a pagina atual
links.forEach(function(link) {

    const destino = link.getAttribute("href");

    // Ignorar links que apontam diretamente para secoes
    if (destino && !destino.includes("#")) {

        if (destino === paginaAtual) {
            link.classList.add("ativo");
        }

    }

});


// ATUALIZAR O DESTAQUE AO CLICAR NO MENU

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {
            item.classList.remove("ativo");
        });

        link.classList.add("ativo");

    });

});

