var Name = "";
var NovoIndex = 0;
var AntigoIndex = -1;
var desafiosUsados = [];
var verdadesUsadas = [];
var verdadeAUsadas = [];
var desafioAUsados = [];

var jogadoresValidos = data.filter(jogador => jogador.name !== Name);
var jogadoresAleatorios = jogadoresValidos.sort(() => Math.random() - 0.5);
function Pergunta(Name0, Index0) {
  
 jogadoresValidos = data.filter(jogador => jogador.name !== Name);
 jogadoresAleatorios = jogadoresValidos.sort(() => Math.random() - 0.5);
  document.getElementById("local").showModal();
  NovoIndex = Index0;
  if (NovoIndex == AntigoIndex) {
    data[NovoIndex].VesesSeguidas += 1;
  }
  else {
    data[NovoIndex].VesesSeguidas += 1;
    if (AntigoIndex != -1) {
      data[AntigoIndex].VesesSeguidas = 0;
    }
  }
  Name = Name0;
  desafiosUsados = [];
  verdadesUsadas = [];
  if(data[NovoIndex].VesesSeguidas%3 == 0 && Maisde3DesafioObrigatorio == true){
  Desafio(true);
  }
  else{
  document.getElementById("local").innerHTML = `
   
    <fieldset class="VD">
      <legend>Pergunta para ${Name}</legend><br>
      <button onclick="Verdade()">Verdade</button><br><br>
      <button onclick="Aleatorio()" class="ale">Aleatório</button><br><br>
      <button onclick="Desafio()">Desafio</button><br>
    </fieldset>
  `;
}
}
function Verdade() {
  if(PerguntasAdultas == true ? Math.random() < 0.5 ? true : false : true){
  const perguntaAleatoria = verdade.filter((verdade, index) => !verdadesUsadas.includes(index))
    .map(verdade => {
      return verdade
        .replace(/{aleatoria}/, aleatoria[Math.floor(Math.random() * aleatoria.length)])
        .replace(/{sentimentos}/, sentimentos[Math.floor(Math.random() * sentimentos.length)])
        .replace(/{jogadores}/, getRandomJogador(Name, 0))
        .replace(/{jogadores1}/, getRandomJogador(Name, 1))
        .replace(/{jogadores2}/, getRandomJogador(Name, 2))
        .replace(/{jogadores3}/, getRandomJogador(Name, 3))
        .replace(/{jogadores4}/, getRandomJogador(Name, 4))
        .replace(/{letras}/, letras[Math.floor(Math.random() * letras.length)])
        .replace(/{numeros}/, numeros[Math.floor(Math.random() * numeros.length)])
        .replace(/{profissoes}/, profissoes[Math.floor(Math.random() * profissoes.length)])
        .replace(/{adjetivos}/, adjetivos[Math.floor(Math.random() * adjetivos.length)]);
    });

  if (perguntaAleatoria.length > 0) {
    const perguntaEscolhida = perguntaAleatoria[Math.floor(Math.random() * perguntaAleatoria.length)];
    const indexPergunta = verdade.indexOf(perguntaEscolhida);
    verdadesUsadas.push(indexPergunta);
    EscreverPergunta(perguntaEscolhida,0);
  } else {

    verdadesUsadas = [];
    Verdade();
  }
}
else{
  const perguntaAleatoria = verdadeA.filter((verdadeA, index) => !verdadeAUsadas.includes(index))
  .map(verdadeA => {
    return verdadeA
      .replace(/{aleatoria}/, aleatoria[Math.floor(Math.random() * aleatoria.length)])
      .replace(/{sentimentos}/, sentimentos[Math.floor(Math.random() * sentimentos.length)])
      .replace(/{jogadores}/, getRandomJogador(Name, 0))
      .replace(/{jogadores1}/, getRandomJogador(Name, 1))
      .replace(/{jogadores2}/, getRandomJogador(Name, 2))
      .replace(/{jogadores3}/, getRandomJogador(Name, 3))
      .replace(/{jogadores4}/, getRandomJogador(Name, 4))
      .replace(/{letras}/, letras[Math.floor(Math.random() * letras.length)])
      .replace(/{numeros}/, numeros[Math.floor(Math.random() * numeros.length)])
      .replace(/{profissoes}/, profissoes[Math.floor(Math.random() * profissoes.length)])
      .replace(/{adjetivos}/, adjetivos[Math.floor(Math.random() * adjetivos.length)]);
  });

if (perguntaAleatoria.length > 0) {
  const perguntaEscolhida = perguntaAleatoria[Math.floor(Math.random() * perguntaAleatoria.length)];
  const indexPergunta = verdadeA.indexOf(perguntaEscolhida);
  verdadeAUsadas.push(indexPergunta);
  EscreverPergunta(perguntaEscolhida,0);
} else {

  verdadeAUsadas = [];
  Verdade();
}
}
}

function Desafio(obg = false) {
  if(PerguntasAdultas == true ? Math.random() < 0.5 ? true : false : true){
  const desafioAleatorio = desafio.filter((d, index) => !desafiosUsados.includes(index))
    .map(d => {
      return d
        .replace(/{aleatoria}/, aleatoria[Math.floor(Math.random() * aleatoria.length)])
        .replace(/{sentimentos}/, sentimentos[Math.floor(Math.random() * sentimentos.length)])
        .replace(/{jogadores}/, getRandomJogador(Name, 0))
        .replace(/{jogadores1}/, getRandomJogador(Name, 1))
        .replace(/{jogadores2}/, getRandomJogador(Name, 2))
        .replace(/{jogadores3}/, getRandomJogador(Name, 3))
        .replace(/{jogadores4}/, getRandomJogador(Name, 4))
        .replace(/{letras}/, letras[Math.floor(Math.random() * letras.length)])
        .replace(/{numeros}/, numeros[Math.floor(Math.random() * numeros.length)])
        .replace(/{profissoes}/, profissoes[Math.floor(Math.random() * profissoes.length)])
        .replace(/{adjetivos}/, adjetivos[Math.floor(Math.random() * adjetivos.length)]);
    });
  if (desafioAleatorio.length > 0) {
    const desafioEscolhido = desafioAleatorio[Math.floor(Math.random() * desafioAleatorio.length)];
    const indexDesafio = desafio.indexOf(desafioEscolhido);
    desafiosUsados.push(indexDesafio);
    EscreverPergunta(desafioEscolhido,1,obg);
  } else {

    desafiosUsados = [];
    Desafio(obg);
  }
}
else{
  const desafioAleatorio = desafioA.filter((d, index) => !desafioAUsados.includes(index))
    .map(d => {
      return d
        .replace(/{aleatoria}/, aleatoria[Math.floor(Math.random() * aleatoria.length)])
        .replace(/{sentimentos}/, sentimentos[Math.floor(Math.random() * sentimentos.length)])
        .replace(/{jogadores}/, getRandomJogador(Name, 0))
        .replace(/{jogadores1}/, getRandomJogador(Name, 1))
        .replace(/{jogadores2}/, getRandomJogador(Name, 2))
        .replace(/{jogadores3}/, getRandomJogador(Name, 3))
        .replace(/{jogadores4}/, getRandomJogador(Name, 4))
        .replace(/{letras}/, letras[Math.floor(Math.random() * letras.length)])
        .replace(/{numeros}/, numeros[Math.floor(Math.random() * numeros.length)])
        .replace(/{profissoes}/, profissoes[Math.floor(Math.random() * profissoes.length)])
        .replace(/{adjetivos}/, adjetivos[Math.floor(Math.random() * adjetivos.length)]);
    });
  if (desafioAleatorio.length > 0) {
    const desafioEscolhido = desafioAleatorio[Math.floor(Math.random() * desafioAleatorio.length)];
    const indexDesafio = desafioA.indexOf(desafioEscolhido);
    desafioAUsados.push(indexDesafio);
    EscreverPergunta(desafioEscolhido,1,obg);
  } else {

    desafioAUsados = [];
    Desafio(obg);
  }
}
}
function Aleatorio() {
  const aleatorio = Math.random() < 0.5 ? Verdade : Desafio;
  aleatorio();
}

function getRandomJogador(Name, indice) {
  if (jogadoresValidos.length > 0) {
    if (indice >= jogadoresAleatorios.length) {
      return jogadoresAleatorios[jogadoresAleatorios.length - 1].name;
    } else {
      return jogadoresAleatorios[indice].name;
    }
  } else {
    return "Qualquer um dessa mesa";
  }
}



function EscreverPergunta(perguntaa,tipo,obg=false) {
  document.getElementById("local").innerHTML = `
    <fieldset class="Vod">
    <h1>${tipo==0?"Verdade":obg==true?"Desafio <br><b style='font-size:14px;'>(3 veses seguidas!)</b>":"Desafio"}</h1>
      <div class="pergunta">${perguntaa}</div>
      <div class="botoes">
        <button class="botao" onclick="concluido()">Concluído</button><button class="botao desistir" onclick="desistir()">Desistir</button>
      </div>
    </fieldset>
    `;
}

function concluido() {
  AntigoIndex = NovoIndex;
  data[NovoIndex].Pontos += 1;
  jogar();
}

function desistir() {
  AntigoIndex = NovoIndex;
  data[NovoIndex].AntPontos += 1;

  jogar();
}
