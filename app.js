function pesquisar() { 
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        // section.innerHTML = "Digite o nome da princesa!"
        Swal.fire({
            title: 'Digite o nome da princesa ou filme!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            customClass: {
                title: 'my-custom-title',
                content: 'my-custom-content'
              }
          })
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let filme = "";

// para cada dado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    filme = dado.filme.toLowerCase();

    if (titulo.includes(campoPesquisa) || filme.includes(campoPesquisa)) {

        resultados += `
        <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
        <a href="${dado.trailer}" target="_blank">Trailer do Filme</a>
        </div>
        `
    }
}

if (!resultados) {
    // resultados = "Princesa não encontrada!"
    Swal.fire({
        title: 'Princesa desconhecida!',
        icon: 'warning',
        confirmButtonText: 'Ok',
        customClass: {
            title: 'my-custom-title',
            content: 'my-custom-content'
          }
      })
}

section.innerHTML = resultados;
}

// console.log(dados);

