function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, verifica se a seção foi encontrada
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(!campoPesquisa) {
      section.innerHTML = "<p>Nenhum atleta encontrado. Campo de pesquisa vazio</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada resultado, incluindo título, descrição e link
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }
      
      
    }
  
    if(!resultados) {
      resultados = "<p>Nenhum atleta encontrado</p>"
    }
    // Insere o HTML dos resultados na seção
    section.innerHTML = resultados;
  }