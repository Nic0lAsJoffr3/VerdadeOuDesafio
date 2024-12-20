const cores = [
  "#440000",
  "#9c3939",
  "#970000",
  "#d70000",
  "#ff5b5b",

  "#8f4900",
  "#af6c28",
  "#c46400",
  "#ff8a10",
  "#ffbd7a",

  "#747900",
  "#9ea248",
  "#adb500",
  "#dee700",
  "#f8fe6e",

  "#0b4200",
  "#126d00",
  "#1aa000",
  "#2dda0b",
  "#8fff7a",

  "#004440",
  "#287e79",
  "#00958c",
  "#00d5c8",
  "#5afff5",

  "#00002b",
  "#01006d",
  "#0100de",
  "#4f4eff",
  "#807fff",

  "#2c006d",
  "#3f029a",
  "#5c0dd1",
  "#6335a8",
  "#944cff",

  "#260025",
  "#660063",
  "#a600a2",
  "#f80cf3",
  "#fa5af7",


  "#000000",
  "#202020",
  "#2d2d2d",
  "#3e3e3e",
  "#4a4a4a",

  "#7a7a7a",
  "#959595",
  "#adadad",
  "#dadada",
  "#fafafa",
];


//Variaveis de controle
var data = [];
PerguntasAdultasCh = 0.25;
Aleatorio0ch = 0.25;
PerguntasAdultas = false;
Maisde3DesafioObrigatorio = false;
PorcentagemVariavel = true;
PontosAnterior = false;
Classif = true;

//Variaveis para complementar as peguntas:

let aleatoria = [
  "estrela", "montanha-russa", "sorvete", "relógio", "tapete", "cavalo", "ponte", "planeta", "violão", "robot",
  "barco", "anel", "super-herói", "chave", "marionete", "foguete", "espada", "cacto", "avião", "nuvem",
  "pirâmide", "bumerangue", "geleira", "trem", "microfone", "carroça", "bicicleta", "câmera", "pirata", "espelho",
  "abajur", "canoa", "mochila", "galáxia", "sino", "helicóptero", "diamante", "piano", "farol", "balão",
  "vulcão", "tartaruga", "patinete", "lâmpada", "alicate", "canoa", "estátua", "moinho", "meteorito", "castelo",
  "dragão", "pingente", "barraca", "bumerangue", "tigre", "bússola", "cometa", "caixote", "prancha", "harpa",
  "moeda", "estátua", "churrasqueira", "água-viva", "ícone", "relâmpago", "peixe", "garrafa", "tesoura", "telefone",
  "estilingue", "lenço", "fantasma", "máquina de escrever", "macaco", "leão", "búfalo", "floresta", "lagoa", "estrela do mar",
  "zebra", "girafa", "baleia", "elefante", "jacaré", "urso polar", "foca", "canguru", "esquilo", "lobo",
  "camaleão", "golfinho", "guaxinim", "rato", "raposa", "caranguejo", "cobra", "pinguim", "abelha", "aranha",
  "borboleta", "lagarto", "polvo", "água", "areia", "vento", "fogo", "terra", "neve", "lua",
  "cachoeira", "arco-íris", "montanha", "deserto", "praia", "oceano", "rio", "nuvem", "neblina", "chuva",
  "tempestade", "céu", "aurora", "estrela cadente", "galáxia", "buraco negro", "asteroide", "satélite", "nave espacial", "planeta anão",
  "cristal", "ímã", "tijolo", "ferradura", "roda", "corvo", "papagaio", "águia", "gavião", "urso-pardo",
  "flauta", "guitarra", "bateria", "violino", "contrabaixo", "trompete", "saxofone", "clarinete", "harpa", "xilofone",
  "triângulo", "tamborim", "cajón", "pandeiro", "castanhola", "surdo", "cuíca", "agogô", "berimbau", "piano elétrico",
  "teclado", "sintetizador", "gravador", "disco de vinil", "fones de ouvido", "mp3", "caixa de som", "amplificador", "microfone", "megafone",
  "avião de papel", "cartão postal", "livro antigo", "manuscrito", "rolo de filme", "mapa", "globo terrestre", "mochila de viagem", "carteira", "caderno",
  "caneta", "lápis", "borracha", "grafite", "papel de carta", "lupa", "óculos", "relógio de bolso", "canivete", "moeda antiga",
  "baú do tesouro", "coroa", "cetro", "colher de prata", "taça de cristal", "pingente dourado", "anjo de cerâmica", "globo de neve", "relógio de parede", "ventilador",
  "balança", "máquina de costura", "tijolo", "carretel de linha", "chaleira", "ferro de passar", "candeeiro", "cama de solteiro", "ventilador", "poltrona",
  "mesa de centro", "espelho grande", "tapete macio", "retrato antigo", "rádio retrô", "pintura a óleo", "escultura de madeira", "abajur moderno", "cadeira de balanço", "porta-retrato",
  "caderno de anotações", "agenda", "caixa de ferramentas", "lanterna", "isqueiro", "caixa de fósforos", "chave de fenda", "martelo", "serra elétrica", "pregos",
  "parafusos", "luvas de trabalho", "máscara de solda", "capacete", "bota de segurança", "óculos de proteção", "fita métrica", "nivelador", "esquadro", "serrote",
  "furadeira", "broca", "grampo", "torquês", "alicate universal", "alicate de corte", "alicate de pressão", "estilete", "tesoura de corte", "marreta",
  "formão", "paquímetro", "micrômetro", "serra circular", "serra tico-tico", "chave inglesa", "carrinho de mão", "plaina", "régua de aço", "espátula"
];


let sentimentos = [
  "apaixonado", "indiferente", "envergonhado", "irritado", "grato", "orgulhoso", "tímido", "surpreso", "tranquilo", "culpado",
  "nostálgico", "alegre", "aflito", "esperançoso", "determinado", "com saudade", "confiante", "inspirado", "assustado", "calmo",
  "ansioso", "desanimado", "animado", "melancólico", "frustrado", "arrependido", "eufórico", "desesperado", "curioso",
  "desamparado", "exaltado", "satisfeito", "contente", "resignado", "inquieto", "inseguro", "aliviado", "ciumento", "empático",
  "extasiado", "ressentido", "perdido", "consolado", "constrangido", "desconfiado", "revoltado", "esperançoso", "chateado",
  "comovido", "invejoso", "vulnerável", "solidário", "amado", "traído", "irresoluto", "destemido", "angustiado", "sereno"
];


let adjetivos = [
  "pequeno", "robusto", "macio", "rústico", "elegante", "sinuoso", "antigo", "radiante", "áspero", "lento",
  "moderno", "afiado", "transparente", "pesado", "útil", "bizarro", "histórico", "sofisticado", "leve", "autêntico",
  "glorioso", "espetacular", "exuberante", "misterioso", "fascinante", "carismático", "iluminado", "sombrio",
  "irreverente", "flutuante", "magnífico", "quente", "gelado", "brilhante", "deslumbrante", "frágil", "poderoso",
  "desajeitado", "único", "colossal", "escorregadio", "denso", "vazio", "arrojado", "melancólico", "harmonioso",
  "intenso", "espinhoso", "vibrante", "suave", "exótico", "sólido", "multicolorido", "valioso", "etéreo",
  "imperfeito", "resiliente", "astuto", "criativo", "audaz", "romântico", "surreal", "metálico", "zombeteiro"
];


let letras = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];


let numeros = [];
while (numeros.length < 20) {
  const numero = Math.floor(Math.random() * 20);
  if (!numeros.includes(numero)) {
    numeros.push(numero);
  }
}
let profissoes = [
  "cientista", "médico", "engenheiro", "artista", "jornalista", "ator", "bombeiro", "músico", "advogado", "arquiteto",
  "professor", "piloto", "chef", "escritor", "designer", "policial", "veterinário", "farmacêutico", "astronauta", "enfermeiro",
  "programador", "psicólogo", "carpinteiro", "eletricista", "marceneiro", "jardineiro", "analista de sistemas", "pescador",
  "técnico de informática", "geólogo", "astrônomo", "bioquímico", "geneticista", "tatueiro", "fotógrafo", "dublador",
  "coreógrafo", "dançarino", "atleta profissional", "treinador de animais", "ilustrador", "terapeuta ocupacional",
  "contador", "economista", "publicitário", "editor de vídeo", "redator", "cientista político", "meteorologista",
  "arqueólogo", "antropólogo", "historiador", "bibliotecário", "desenvolvedor de jogos", "produtor musical", "químico",
  "nanotecnólogo", "operador de máquinas", "técnico de laboratório", "florista", "instrutor de mergulho", "restaurador de arte",
  "chefe de cozinha molecular", "mestre-cervejeiro", "arqueiro profissional", "encadernador", "caçador de relíquias",
  "piloto de drone", "explorador de cavernas", "streamer", "engenheiro aeroespacial", "ecologista", "designer de interiores",
  "engenheiro de som", "consultor de viagens", "especialista em marketing digital", "instrutor de parkour", "alpinista profissional",
  "sommelier", "guia turístico", "domador de circo", "agente de talentos", "acupunturista", "personal trainer",
  "especialista em inteligência artificial", "cientista forense", "barman", "criador de conteúdo digital", "ceramista",
  "desenvolvedor de robótica", "analista de dados", "criador de personagens", "especialista em blockchain"
];
function salvarVariaveis() {
  const dadosParaSalvar = data.map(item => ({
    name: item.name,
    color: item.color,
    Pontos: item.Pontos,
    AntPontos: item.AntPontos
  }));
  localStorage.setItem('data', JSON.stringify(dadosParaSalvar));


  localStorage.setItem('PularENPerg', JSON.stringify(PularENPerg));
  localStorage.setItem('Aleatorio0', JSON.stringify(Aleatorio0));
  localStorage.setItem('Classif', JSON.stringify(Classif));
  localStorage.setItem('PontosAnterior', JSON.stringify(PontosAnterior));
  localStorage.setItem('PerguntasAdultas', JSON.stringify(PerguntasAdultas));
  localStorage.setItem('Maisde3DesafioObrigatorio', JSON.stringify(Maisde3DesafioObrigatorio));
  localStorage.setItem('PorcentagemVariavel', JSON.stringify(PorcentagemVariavel));
  localStorage.setItem('PerguntasAdultasCh', JSON.stringify(PerguntasAdultasCh));
  localStorage.setItem('Aleatorio0ch', JSON.stringify(Aleatorio0ch));
}

function carregarVariaveis() {
  const dadosSalvos = JSON.parse(localStorage.getItem('data')) || [];
  data = dadosSalvos.map(item => ({
    name: item.name || "Unknown",
    color: item.color || "#000000",
    percentage: 0,
    VesesSeguidas: 0,
    Pontos: parseInt(item.Pontos, 10) || 0,
    AntPontos: parseInt(item.AntPontos, 10) || 0
  }));

  PularENPerg = JSON.parse(localStorage.getItem('PularENPerg')) || false;
  Aleatorio0 = JSON.parse(localStorage.getItem('Aleatorio0')) || false;
  Classif = JSON.parse(localStorage.getItem('Classif')) || true;
  PontosAnterior = JSON.parse(localStorage.getItem('PontosAnterior')) || false;
  PerguntasAdultas = JSON.parse(localStorage.getItem('PerguntasAdultas')) || false;
  Maisde3DesafioObrigatorio = JSON.parse(localStorage.getItem('Maisde3DesafioObrigatorio')) || false;
  PorcentagemVariavel = JSON.parse(localStorage.getItem('PorcentagemVariavel')) || true;
  PerguntasAdultasCh = parseFloat(localStorage.getItem('PerguntasAdultasCh')) || 0.25;
  Aleatorio0ch = parseFloat(localStorage.getItem('Aleatorio0ch')) || 0.5;

  document.getElementById("Pul").checked = PularENPerg;
  document.getElementById("Ale").checked = Aleatorio0;
  document.getElementById("cla").checked = Classif;
  document.getElementById("adult-questions").checked = PerguntasAdultas;
  document.getElementById("mandatory-challenges").checked = Maisde3DesafioObrigatorio;
  document.getElementById("variable-percentage").checked = PorcentagemVariavel;
  document.getElementById("pnt").checked = PontosAnterior;
  document.getElementById("PerAdRange").value = PerguntasAdultasCh*100;
  document.getElementById("AleId").value = Aleatorio0ch*100;
}
