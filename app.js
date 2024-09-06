function pesquisar() {

    let section = document.getElementById('atletas') //trás a seção onde os resultados são exibidos

    let campoPesquisa = document.getElementById('campo-pesquisa').value; //trás somente o dado relacionado ao item que o usuário digitar

    if (!campoPesquisa) {  //Condição criada caso usuário digite valor inválido
        section.innerHTML = "<p>Nada foi encontrado !</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase() //vai colocar todos os dados do campo de pesquisa em minúsculas

    console.log(campoPesquisa); //Exibe dados no console do navegador (Inspecionar)

    let resultados = "" // variáveis criada para armazenar os resultados da busca
    let titulo = ""
    let descricao = ""
    let tags = ""

//Laço de repetição:
for (let dado of dados) {  //Para cada dado da lista de variáveis de dados.
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tag = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `  
            <div id="resultado-pesquisa">
            <h2><strong>${dado.titulo}</strong></h2>
            <p>${dado.descricao}</p><br>
            <h3>Títulos</h3>
        <ul>
            <li><strong>1988:</strong> Sua primeira conquista veio ao volante da McLaren-Honda, um carro dominador daquela temporada. Senna mostrou um desempenho excepcional, combinando velocidade com consistência.</li>
            <li><strong>1990:</strong> Em uma temporada marcada pela rivalidade com Alain Prost, Senna conseguiu superar o francês e conquistar seu segundo título mundial.</li>
            <li><strong>1991:</strong> Em seu ano mais dominante, Senna conquistou seu terceiro título mundial com quatro vitórias nas primeiras quatro corridas.<br></li>
        </ul>
        <p>Para mais detalhes <a href=${dado.link} target="_blank" rel="external"> clique aqui</a>.</p>
        </div>   
    `;
        }
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado !</p>"
}

section.innerHTML = resultados; //atribui resultados referente a seção HTML
}