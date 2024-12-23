var jogadores = [
    {
      nick: "https://pbs.twimg.com/media/DOBtmY9UMAEhiWP.jpg",
      nome: "Paulo",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nick: "https://i.pinimg.com/originals/64/69/ba/6469bada0e7fd3c3579af63cabf3aef8.jpg",
      nome: "Rafa",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nick: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFBws_DS-Xe_tvreqHQc8QNelbtc-cdIYByipqb2vejrnZ3ZroxMIEN2YCOTmpE7Nj_k&usqp=CAU",
      nome: "Gui",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nick: "https://64.media.tumblr.com/77e94c182e27591ccf9d0ae2477f556f/tumblr_od2y0kfDY91vycuvuo1_1280.jpg",
      nome: "Renata",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    }
  ];
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    var tabelaHTML = "";
  
    jogadores.forEach((jogador, index) => {
      tabelaHTML += `
        <tr>
          <td><img src="${jogador.nick}" alt="${jogador.nome}" style="width: 50px; height: 50px;"></td>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
        </tr>
      `;
    });
  
    // Adicionar botão no final da tabela para zerar a pontuação
    tabelaHTML += `
      <tr>
        <td colspan="6"></td>
        <td colspan="3"><button onClick="zerarPontuacao()">Zerar Pontuação</button></td>
      </tr>
    `;
  
    elementoTabela.innerHTML = tabelaHTML;
  }
  
  function adicionarVitoria(index) {
    var jogador = jogadores[index];
    jogador.vitoria++;
    jogador.pontos += 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(index) {
    var jogador = jogadores[index];
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(index) {
    var jogador = jogadores[index];
    jogador.derrota++;
    exibirNaTela();
  }
  
  function zerarPontuacao() {
    jogadores.forEach(jogador => {
      jogador.vitoria = 0;
      jogador.empate = 0;
      jogador.derrota = 0;
      jogador.pontos = 0;
    });
  
    exibirNaTela();
  }
  