var listaFilmes = [
    { url: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg', nome: 'Escola de Rock' },
    { url: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/10/19/01/57/552532.jpg', nome: 'A chegada' },
    { url: 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', nome: 'Aranhaverso' },
    { url: 'https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg', nome: '10 coisas que eu odeio em você' },
    { url: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG', nome: 'Matrix' }
];

var container = document.createElement('div');
container.id = 'filmes-container';
container.className = 'container'; // Adicionando classe container

for (var i = 0; i < listaFilmes.length; i++) {
    var filme = listaFilmes[i];

    var div = document.createElement('div');
    div.className = 'filme-item'; // Adicionando classe filme-item

    var img = document.createElement('img');
    img.src = filme.url;
    img.alt = filme.nome;
    img.className = 'filme-imagem'; // Adicionando classe filme-imagem

    var p = document.createElement('p');
    p.textContent = filme.nome;
    p.className = 'filme-nome'; // Adicionando classe filme-nome

    div.appendChild(img);
    div.appendChild(p);

    container.appendChild(div);
}

document.body.appendChild(container);

// Adicionando as regras CSS diretamente no head do documento
document.head.insertAdjacentHTML('beforeend', `
  <style>
    body {
      font-family: "Roboto Mono", monospace;
      text-align: center;
      background-image: url("https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/background-aluraflix.png");
      background-color: #000000;
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
    }

    .container {
      display: flex; /* Adicionando display flex para alinhar os itens lado a lado */
      justify-content: space-around; /* Distribuindo espaço ao redor dos itens */
      flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não houver espaço suficiente */
      text-align: center;
      padding: 20px;
    }

    .filme-item {
      margin: 10px; /* Adicionando margem para espaçamento entre os itens */
    }

    .filme-imagem {
      max-height: 250px;
    }

    .filme-nome {
      color: #ffffff;
      margin-top: 5px;
    }

    .page-title {
      color: #ffffff;
      margin: 0 0 5px;
      font-size: 24px;
    }

    .page-subtitle {
      color: #ffffff;
      margin-top: 5px;
    }

    .page-logo {
      width: 200px;
    }

    .alura-logo {
      width: 40px;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    body > img {
      margin: 0 10px;
    }

    img {
      max-height: 250px;
    }
  </style>
`);
