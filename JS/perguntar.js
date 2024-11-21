window.onload = carregarPerguntas;
window.addEventListener('storage', carregarPerguntas);

var Name = "";
var NovoIndex = 0;
var AntigoIndex = -1;
var desafiosUsados = [];
var verdadesUsadas = [];
var verdadeAUsadas = [];
var desafioAUsados = [];
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

  if (PerguntasAdultas == true ? Math.random() < 0.25 ? true : false : true) {

    const perguntaAleatoria = verdade.filter((v, index) => !verdadesUsadas.includes(index))
      .map(v => {
        return v
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
      if (indexPergunta == -1) {
        if (iii > 5) {
          verdadesUsadas = [];
        }
        Verdade(iii + 1);
      } else {
        verdadesUsadas.push(indexPergunta);
        salvarPerguntas();
        EscreverPergunta(perguntaEscolhida, 0);
      }
    } else {

      verdadesUsadas = [];
      salvarPerguntas();
      Verdade();
    }
  }
  else {
    const perguntaAleatoria = verdadeA.filter((va, index) => !verdadeAUsadas.includes(index))
      .map(va => {
        return va
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
      const perguntaEscolhidaA = perguntaAleatoria[Math.floor(Math.random() * perguntaAleatoria.length)];
      const indexPerguntaA = verdadeA.indexOf(perguntaEscolhidaA);
      if (indexPerguntaA == -1) {

        if (iii > 5) {
          verdadeAUsadas = [];
        }
        Verdade(iii + 1);
      }
      else {
        verdadeAUsadas.push(indexPerguntaA);
        salvarPerguntas();
        EscreverPergunta(perguntaEscolhidaA, 0);
      }
    } else {

      verdadeAUsadas = [];
      salvarPerguntas();
      Verdade();
    }
  }
}

function Desafio(obg = false, iii = 0) {
  if (PerguntasAdultas == true ? Math.random() < 0.2 ? true : false : true) {
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
      if (indexDesafio == -1) {
        if(iii >  5){

          desafiosUsados = [];
        }
        Desafio(obg, iii + 1);
      }
      else {
        desafiosUsados.push(indexDesafio);
        salvarPerguntas();
        EscreverPergunta(desafioEscolhido, 1, obg);
      }
    } else {

      desafiosUsados = [];
      salvarPerguntas();
      Desafio(obg);
    }
  }
  else {
    const desafioAleatorio = desafioA.filter((da, index) => !desafioAUsados.includes(index))
      .map(da => {
        return da
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
      const desafioEscolhidoA = desafioAleatorio[Math.floor(Math.random() * desafioAleatorio.length)];
      const indexDesafioA = desafioA.indexOf(desafioEscolhidoA);
      if (indexDesafioA == -1) {
        if(iii >  5){

          desafioAUsados = [];
        }
        Desafio(obg, iii + 1);
      }
      else {
        desafioAUsados.push(indexDesafioA);
        salvarPerguntas();
        EscreverPergunta(desafioEscolhidoA, 1, obg);
      }
    } else {

      desafioAUsados = [];
      salvarPerguntas();
      Desafio(obg);
    }
  }
}
function Aleatorio() {
  const aleatorio = Math.random() < 0.5 ? Verdade : Desafio;
  aleatorio();
}

function getRandomJogador(N, indice) {
  if (jogadoresValidos.length > 0) {
    let jogador;
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



function EscreverPergunta(perguntaa, tipo, obg = false) {
  LocalPerg = "";
  LocalPerg += `
    <fieldset class="Vod">
    <legend style="font-size:28px;">${Name}</legend>
    <h1>${tipo == 0 ? "Verdade" : obg == true ? "Desafio <br><b style='font-size:14px;'>(3 veses seguidas!)</b>" : "Desafio"}</h1>
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
