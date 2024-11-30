window.onload = carregarPerguntas;
window.addEventListener('storage', carregarPerguntas);

var Name = "";
var NovoIndex = 0;
var AntigoIndex = -1;
var desafiosUsados = [];
var verdadesUsadas = [];
var verdadeAUsadas = [];
var desafioAUsados = [];
var jogador;
function salvarPerguntas() {
  localStorage.setItem("verdadesUsadas", JSON.stringify(verdadesUsadas));
  localStorage.setItem("desafiosUsados", JSON.stringify(desafiosUsados));
  localStorage.setItem("verdadeAUsadas", JSON.stringify(verdadeAUsadas));
  localStorage.setItem("desafioAUsados", JSON.stringify(desafioAUsados));
}

function carregarPerguntas() {
  const verdades = localStorage.getItem("verdadesUsadas");
  const desafios = localStorage.getItem("desafiosUsados");
  const verdadesA = localStorage.getItem("verdadeAUsadas");
  const desafiosA = localStorage.getItem("desafioAUsados");

  verdadesUsadas = verdades ? JSON.parse(verdades) : [];
  desafiosUsados = desafios ? JSON.parse(desafios) : [];
  verdadeAUsadas = verdadesA ? JSON.parse(verdadesA) : [];
  desafioAUsados = desafiosA ? JSON.parse(desafiosA) : [];
}


function Pergunta(Name0, Index0) {

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
  if (Aleatorio0) {
    Aleatorio();
  }
  else {
    if (data[NovoIndex].VesesSeguidas % 3 == 0 && Maisde3DesafioObrigatorio == true) {
      Desafio(true);
    }
    else {
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
}




function Verdade(iii = 0) {


  jogadoresValidos = data.filter(jogador => jogador.name !== Name);
  jogadoresAleatorios = jogadoresValidos.sort(() => Math.random() - 0.5);
  if (PerguntasAdultas == true ? Math.random() < Math.abs(PerguntasAdultasCh -1) ? true : false : true) {

    const perguntaAleatoria = verdade.filter((verdade, index) => !verdadesUsadas.includes(index))


    if (perguntaAleatoria.length > 0) {
      var perguntaEscolhida = perguntaAleatoria[Math.floor(Math.random() * perguntaAleatoria.length)];
      const indexPergunta = verdade.indexOf(perguntaEscolhida);
      if (indexPergunta == -1) {

        verdadesUsadas = [];

      } else {
        perguntaEscolhida = perguntaEscolhida
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
        verdadesUsadas.push(indexPergunta);
        salvarPerguntas();
        EscreverPergunta(perguntaEscolhida, 0,false,false);
      }
    } else {

      verdadesUsadas = [];
      salvarPerguntas();
      Verdade();
    }
  }
  else {
    const perguntaAleatoria = verdadeA.filter((verdadeA, index) => !verdadeAUsadas.includes(index))
      

    if (perguntaAleatoria.length > 0) {
      var perguntaEscolhidaA = perguntaAleatoria[Math.floor(Math.random() * perguntaAleatoria.length)];
      const indexPerguntaA = verdadeA.indexOf(perguntaEscolhidaA);
      if (indexPerguntaA == -1) {

        verdadeAUsadas = [];

      }
      else {
        perguntaEscolhidaA = perguntaEscolhidaA
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
        verdadeAUsadas.push(indexPerguntaA);
        salvarPerguntas();
        EscreverPergunta(perguntaEscolhidaA, 0,false,true);
      }
    } else {

      verdadeAUsadas = [];
      salvarPerguntas();
      Verdade();
    }
  }
}
function Desafio(obg = false, iii = 0) {


  jogadoresValidos = data.filter(jogador => jogador.name !== Name);
  jogadoresAleatorios = jogadoresValidos.sort(() => Math.random() - 0.5);
  if (PerguntasAdultas == true ? Math.random() < Math.abs(PerguntasAdultasCh -1) ? true : false : true) {
    const desafioAleatorio = desafio.filter((desafio, index) => !desafiosUsados.includes(index))

    if (desafioAleatorio.length > 0) {
      var desafioEscolhido = desafioAleatorio[Math.floor(Math.random() * desafioAleatorio.length)];
      const indexDesafio = desafio.indexOf(desafioEscolhido);
      if (indexDesafio == -1) {

        desafiosUsados = [];

      }
      else {
        desafioEscolhido = desafioEscolhido
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
        desafiosUsados.push(indexDesafio);
        salvarPerguntas();
        EscreverPergunta(desafioEscolhido, 1, obg,false);
      }
    } else {

      desafiosUsados = [];
      salvarPerguntas();
      Desafio(obg);
    }
  }
  else {
    const desafioAleatorio = desafioA.filter((desafioA, index) => !desafioAUsados.includes(index))
    if (desafioAleatorio.length > 0) {
      var desafioEscolhidoA = desafioAleatorio[Math.floor(Math.random() * desafioAleatorio.length)];
      const indexDesafioA = desafioA.indexOf(desafioEscolhidoA);
      if (indexDesafioA == -1) {
        desafioAUsados = [];
      }
      else {
        desafioAUsados.push(indexDesafioA);
        salvarPerguntas();
        desafioEscolhidoA = desafioEscolhidoA
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

        EscreverPergunta(desafioEscolhidoA, 1, obg,true);
      }
    } else {

      desafioAUsados = [];
      salvarPerguntas();
      Desafio(obg);
    }
  }
}




function Aleatorio() {
  const aleatorio = Math.random() < Aleatorio0ch ? Verdade : Desafio;
  aleatorio();
}

function getRandomJogador(N, indice) {
  if(indice+2 <= quantJogadores){
  if (jogadoresValidos.length > 0) {

    do {
      if (indice >= jogadoresAleatorios.length) {
        jogador = jogadoresAleatorios[jogadoresAleatorios.length - 1];
      } else {
        jogador = jogadoresAleatorios[indice];
      }
      indice++;
    } while (jogador.name === N && indice < jogadoresAleatorios.length);

    return jogador.name;
  } else {
    return "Alguem dessa mesa";
  }
  }
  else{
    return "você";
  }
}




function EscreverPergunta(perguntaa, tipo, obg = false,adl = false) {
  LocalPerg = "";
  LocalPerg += `
    <fieldset class="Vod">
    <legend style="font-size:28px;">${Name}</legend>
    <h1>${(tipo == 0 ? "Verdade" : obg == true ? "Desafio <br><b style='font-size:14px;'>(3 veses seguidas!)</b>" : "Desafio")}${adl == true?"!":"."}</h1>
      <div class="pergunta">${perguntaa}</div>
      <div class="botoes">
        <button class="botao" onclick="concluido()">Concluído</button>
        <button class="botao desistir" onclick="desistir()">Desistir</button>`
  if (PularENPerg) {
    LocalPerg += `
        <button class="botao pular" onclick="pular()">Pular</button>
        <button class="botao novaP" onclick="NovaP(${tipo})">Nova Pergunta</button>`
  }
  LocalPerg += `
      </div>
    </fieldset>
    `;
  document.getElementById("local").innerHTML = LocalPerg;
}
function NovaP(i) {
  if (!i) {
    Verdade();
  }
  else {
    Desafio();
  }
}
function pular() {
  AntigoIndex = NovoIndex;
  jogar();
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
