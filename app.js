function pesquisar() {

    let section = document.getElementById('atletas')
    let resultados = "" // variável criada para armazenar os resultados da busca

    //Para cada dado dentro da lista faça:

for (let dado of dados) {  //Para cada dado da lista de variáveis de dados.
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
        <p>Saiba mais detalhes em <a href="https://senna.com/" target="_blank" rel="external">Senna.com</a>.</p>
        </div>
    
`
}
section.innerHTML = resultados
}