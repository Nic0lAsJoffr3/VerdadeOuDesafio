const cores = [
  "#db0f0f",
  "#9b2252",
  "#1815e0",
  "#e2c718",
  "#32c87d",
  "#fc78ad",
  "#880606",
  "#5f5def",
  "#0f6876",
  "#b75af2",
  "#121089",
  "#65daec",
  "#0f801c",
  "#988616",
  "#d77e19",
  "#875012",
  "#1ad12f",
  "#ff7575",
  "#681c97",
  "#1cc8e3",
  "#e51568",
  "#decc59",
  "#fc74ad",
  "#32c87d",
  "#ffff6f"
];


//Variaveis de controle
var data = [];
PerguntasAdultas = false;
Maisde3DesafioObrigatorio = false;
PorcentagemVariavel = true;
PontosAnterior = false;
Classif = true;


// Variáveis de pergunta e desafio

let verdade = [
  "Qual foi a maior mentira que você já contou para os seus pais?",
  "Já teve algum crush que nunca soube que você existia?",
  "Qual foi a situação mais embaraçosa que você já passou na frente de um crush?",
  "Você já escondeu o celular de alguém só para não ter que mostrar o que estava fazendo?",
  "Qual foi a coisa mais estranha que você já procurou no Google?",
  "Você já fingiu que não conhecia alguém só para não ter que conversar?",
  "Qual é o maior segredo que você guarda dos seus amigos?",
  "Você já se arrependeu de algo que postou nas redes sociais?",
  "Qual foi a coisa mais idiota que você já fez por um like?",
  "Já enviou uma mensagem para a pessoa errada e ficou morrendo de vergonha?",
  "Você já fez alguma coisa só para impressionar alguém?",
  "Já se sentiu estranho por gostar de algo que seus amigos acham estranho?",
  "Qual foi o maior mico que você já pagou em público?",
  "Você já deu desculpas esfarrapadas para não ir a algum lugar?",
  "Já fingiu estar ocupado só para evitar conversar com alguém?",
  "Você já esqueceu o aniversário de alguém importante?",
  "Já fingiu que estava doente para faltar na escola?",
  "Qual foi a maior vergonha que você já passou em uma chamada de vídeo?",
  "Já tentou impressionar alguém com algo que não sabia fazer?",
  "Você já ficou com alguém só porque seus amigos pediram?",
  "Qual foi a coisa mais engraçada que já aconteceu com você em uma festa?",
  "Já se esqueceu de colocar um conteúdo em modo privado nas redes sociais?",
  "Você já mandou uma mensagem de texto e se arrependeu imediatamente?",
  "Qual foi a mentira mais engraçada que você contou para sair de uma situação?",
  "Já teve um sonho tão estranho que não conseguiu nem contar para ninguém?",
  "Você já tentou esconder um erro e culpar alguém por isso?",
  "Já fez algo que sabia que seus pais não iam gostar, mas fez assim mesmo?",
  "Você já desmentiu alguma história só porque não queria que soubessem que era verdade?",
  "Já ficou com vergonha de uma foto antiga sua que apareceu nas redes sociais?",
  "Você já falou algo sem querer e depois desejou poder voltar no tempo?",
  "Qual foi a maior gafe que você já fez em uma reunião de família?",
  "Você já se apaixonou por alguém sem saber por que?",
  "Qual foi o maior pedido de desculpas que você já fez?",
  "Você já tentou esconder uma surpresa, mas acabou estragando tudo?",
  "Já ficou em uma situação tão sem graça que ficou sem palavras?",
  "Qual é a maior vergonha que você tem de quando era criança?",
  "Já fingiu não ouvir alguém só para evitar uma conversa desconfortável?",
  "Você já se esqueceu de um compromisso importante e tentou inventar uma desculpa?",
  "Já se esqueceu de devolver algo que pegou emprestado e ficou com vergonha de falar sobre isso?",
  "Qual foi o maior erro de cálculo que você já fez?",
  "Já ficou em silêncio durante uma conversa porque não sabia o que falar?",
  "Você já achou que estava falando com alguém e, na verdade, era outra pessoa?",
  "Qual foi a coisa mais fofa que você já fez por alguém?",
  "Já comprou algo só porque achou legal e nunca usou?",
  "Você já participou de uma briga de amigos e depois se arrependeu?",
  "Já teve um crush em alguém que não fazia ideia de quem você era?",
  "Qual é o segredo mais engraçado que você já escondeu de seus amigos?",
  "Já passou uma vergonha tão grande que não teve coragem de voltar ao lugar onde aconteceu?",
  "Você já fingiu que gostava de algo para não desagradar alguém?",
  "Já teve uma paixão platônica tão forte que você se esqueceu da realidade?"
];


let desafio = [
  "Fale um trava-língua três vezes seguidas sem errar.",
  "Imite o som de um animal até alguém adivinhar qual é.",
  "Conte uma piada e veja quem ri primeiro.",
  "Diga 10 palavras começando com a letra '{letras}' sem parar.",
  "Fale sobre {aleatoria} por 1 minuto sem parar, sem repetir palavras.",
  "Finja que é um apresentador de TV por 30 segundos.",
  "Fale 5 fatos interessantes sobre você sem repetir nada.",
  "Crie uma nova receita fictícia e descreva como seria.",
  "Diga um provérbio popular, mas com palavras trocadas.",
  "Faça um discurso motivacional de 30 segundos sobre algo bobo, como {aleatoria}",
  "Fale o alfabeto de trás para frente.",
  "Desafie {jogadores} a adivinhar seu animal favorito só com perguntas sim ou não.",
  "Fale sobre algo sem usar a letra '{letras}'.",
  "Use a palavra 'chocolate' em uma frase de forma criativa.",
  "Fale sobre um sonho maluco que você teve recentemente.",
  "Diga o nome de 10 países em 30 segundos.",
  "Crie uma nova profissão para {jogadores} e explique o que ela faz.",
  "Faça uma previsão do futuro e diga algo que você acha que vai acontecer.",
  "Fale sobre um lugar que você gostaria de viajar e o que faria lá.",
  "Conte algo sobre seu dia de forma como se estivesse contando uma aventura épica.",
  "Fale sobre um filme ou série de forma que pareça que você é o crítico mais importante do mundo.",
  "Diga 3 fatos curiosos sobre {aleatoria}.",
  "Crie uma nova receita de comida usando ingredientes improváveis.",
  "Fale sobre algo que você faria se fosse invisível por 1 hora.",
  "Diga 3 coisas que você faria se fosse o presidente por um dia.",
  "Fale o nome de 10 animais em 30 segundos.",
  "Descreva um momento engraçado que aconteceu com você de forma exagerada.",
  "Crie um nome para uma nova espécie de animal e explique suas características.",
  "Fale de uma maneira que pareça uma entrevista de emprego, mas sobre algo ridículo.",
  "Fale sobre um superpoder que você gostaria de ter e como usaria.",
  "Diga 10 adjetivos que descrevem sua personalidade de forma criativa.",
  "Fale sobre um hobby e tente convencer alguém a começar a praticá-lo.",
  "Diga o que faria se tivesse que sobreviver em uma ilha deserta.",
  "Diga o que faria se tivesse que sobreviver com {jogadores}, em uma ilha deserta.",
  "Crie um novo nome para um dia da semana e explique o que as pessoas fazem nesse dia.",
  "O que você faria se seu casamento com {jogadores} fosse amanhã?",
  "Se você fosse passar um dia inteiro com {jogadores}, o que fariam?",
  "Como você se sentiria se descobrisse que {jogadores} é um super-herói secreto?",
  "Se você tivesse que dar um conselho para {jogadores}, qual seria?",
  "O que você faria se fosse convidado por {jogadores} para uma festa surpresa?",
  "Se {jogadores} fosse o protagonista de um filme, qual seria o título e qual seria o enredo?",
  "Imagine que você está preso em um elevador com {jogadores} por 1 hora, como você passaria o tempo?",
  "Se você fosse fazer uma surpresa para {jogadores}, o que seria e como faria?",
  "O que você acha que {jogadores} faria se ganhasse na loteria amanhã?",
  "Se você tivesse que trocar de vida com {jogadores} por um dia, o que você mais gostaria de fazer?",
  "Se você tivesse que escrever uma carta para {jogadores}, o que diria?",
  "Como você imagina que seria um dia típico de trabalho de {jogadores}?",
  "Se você fosse fazer um pedido de aniversário para {jogadores}, qual seria?",
  "Se você e {jogadores} tivessem que se esconder de uma situação de perigo, qual seria o plano?",
  "Se você e {jogadores} fossem competir em um jogo, quem venceria e por quê?",
  "Qual seria a reação de {jogadores} se você aparecesse de surpresa na sua casa?",
  "Se você fosse o mentor de {jogadores} por um dia, qual conselho você daria?",
  "O que você acha que {jogadores} faria se fosse um personagem de videogame?",
  "Se você tivesse que contar um segredo para {jogadores}, o que contaria?",
  "Voce namoraria com {jogadores}?",
  "Se você fosse fazer um elogio para {jogadores}, qual seria?"
];


//Variaveis "Adultas"
let verdadeA = [
  "Já teve uma paquera que nunca soube que você estava interessado(a)?",
  "Qual foi o momento mais embaraçoso que você já passou em um encontro?",
  "Já ficou com alguém só porque seus amigos estavam insistindo?",
  "Qual foi a coisa mais ousada que você já fez em um encontro?",
  "Já mandou uma mensagem de texto para o crush e ficou esperando ele(a) responder, sem saber o que fazer?",
  "Já teve uma conversa tão íntima com alguém que ficou sem saber como agir depois?",
  "Já se arrependeu de um beijo que deu, mas fingiu que estava tudo bem?",
  "Já trocou olhares com alguém e ficou imaginando o que a pessoa pensaria sobre você?",
  "Já fez algo só para impressionar alguém, mas acabou fazendo papel de bobo?",
  "Já fingiu que estava interessado(a) em alguém só para dar um fora de forma educada?",
  "Já sentiu uma atração por alguém que deveria ser só amigo(a)?",
  "Você já deu um beijo em alguém e depois ficou morrendo de vergonha?",
  "Já teve um crush por alguém e nunca teve coragem de contar?",
  "Já teve um flerte com alguém e depois se arrependeu?",
  "Já ficou com alguém sem saber muito bem por que?",
  "Já teve um encontro tão estranho que ficou desconfortável o tempo todo?",
  "Já fez uma surpresa romântica para alguém e a pessoa nem percebeu?",
  "Já olhou para alguém e imaginou como seria um encontro com a pessoa?",
  "Você já teve vontade de beijar alguém e depois pensou: 'Eu não devia ter feito isso!'?",
  "Já ficou com alguém só porque a oportunidade apareceu na hora?",
  "Você já se pegou se imaginando em um relacionamento com alguém que mal conhece?",
  "Já teve um momento de flerte tão óbvio que a outra pessoa nem percebeu?",
  "Já mandou uma mensagem para alguém e depois apagou porque se arrependeu?",
  "Já teve vontade de se aproximar de alguém, mas ficou com medo de dar o primeiro passo?",
  "Já se pegou se perguntando 'Será que ele(a) gosta de mim?' depois de um encontro?",
  "Já beijou alguém por impulso e depois ficou pensando por dias?",
  "Já flertou de propósito com alguém para ver até onde iria?",
  "Já teve uma conversa tão quente que ficou até sem palavras depois?",
  "Já ficou com alguém que você nunca imaginou que ficaria?",
  "Você já se sentiu atraído por alguém que não deveria?",
  "Já pensou em dar um beijo em alguém, mas ficou com receio de parecer apressado(a)?",
  "Já mandou um emoji ousado para o crush e depois se arrependeu?",
  "Já teve um flerte que parecia inofensivo, mas acabou em algo mais sério?",
  "Já se pegou se perguntando o que a pessoa estava pensando depois de um encontro?",
  "Já ficou com alguém de propósito para ver a reação dos outros?",
  "Já teve uma conversa com alguém e se perguntou se estava sendo muito óbvio(a) nos sinais?",
  "Já se apaixonou por alguém que nunca soube dos seus sentimentos?",
  "Você já ficou nervoso(a) tentando impressionar alguém que gostava muito?",
  "Já fez algo ousado por impulso e depois desejou não ter feito?",
  "Já passou um tempo pensando em alguém depois de um encontro e não conseguiu parar?",
  "Já teve um momento em que percebeu que a química com alguém estava muito forte?",
  "Já enviou uma mensagem para o crush, mas foi tão tímido(a) que não teve coragem de esperar pela resposta?",
  "Já fez algo por impulso em um momento de tesão e depois se arrependeu?",
  "Já teve um flerte tão quente que quase não conseguiu parar de pensar na pessoa?",
  "Já ficou com alguém só porque a oportunidade apareceu, mesmo sabendo que não era a melhor escolha?",
  "Já se imaginou em uma situação super íntima com alguém, mas nunca contou a ninguém?",
  "Já mandou uma mensagem tão ousada que ficou morrendo de vergonha depois?",
  "Já ficou com alguém em um lugar tão inusitado que nunca pensou que faria isso?",
  "Já teve uma atração tão forte por alguém que ficou sem saber como agir quando estava perto?",
  "Já sentiu uma química tão intensa com alguém que foi impossível ignorar?",
  "Já flertou com alguém e ficou surpreso(a) com o quanto foi difícil resistir à tentação?",
  "Já passou a noite inteira conversando com alguém e depois não conseguiu parar de pensar na pessoa?"

];


let desafioA = [
  "Se você tivesse que dar um beijo em {jogadores}, onde seria?",
  "O que você faria se fosse passar uma noite romântica com {jogadores}?",
  "Descreva o que você acha que {jogadores} faz em um encontro perfeito.",
  "Se você tivesse que escolher um lugar para passar o resto da vida com {jogadores}, onde seria?",
  "O que você acha que {jogadores} acharia se você mandasse uma mensagem de texto bem ousada?",
  "Qual seria a reação de {jogadores} se você dissesse que está apaixonado(a) por ele(a)?, ele(a) responde se você acertou ou não, e porque.",
  "Se você pudesse dar um conselho de relacionamento para {jogadores}, qual seria?",
  "O que você faria se {jogadores} te convidasse para um encontro às cegas?",
  "Se você tivesse que escolher entre um jantar à luz de velas ou uma noite de diversão com {jogadores}, o que escolheria?",
  "Qual seria a sua reação se {jogadores} te pedisse para sair em um encontro sem avisar com antecedência?",
  "Se você estivesse flertando com {jogadores}, o que faria para chamar a atenção dele(a)?",
  "Se você tivesse que enviar uma mensagem sexy para {jogadores}, o que diria?",
  "O que você acha que {jogadores} faria se você pedisse para ele(a) ser seu par em um jogo de sedução?",
  "Se você fosse passar uma noite de aventura com {jogadores}, o que gostaria de fazer?",
  "Se {jogadores} fosse seu parceiro(a) em uma situação um pouco ousada, como vocês reagiriam?",
  "Se você tivesse que dar uma nota de 1 a 10 para o charme de {jogadores}, qual seria a nota?",
  "Qual a primeira coisa que você falaria para {jogadores} se tivesse que se declarar?",
  "Se você estivesse em um jogo de verdade ou consequência com {jogadores}, qual pergunta ousada faria?",
  "O que você acha que {jogadores} diria se você começasse a flertar descaradamente com ele(a)?",
  "Se você fosse fazer um elogio atrevido para {jogadores}, qual seria?",

  "Qual seria a sua reação se {jogadores} te enviasse uma mensagem de bom dia com um elogio ousado?",
  "Se você tivesse que fazer uma surpresa romântica para {jogadores}, o que faria?",
  "Descreva como seria um encontro perfeito com {jogadores} no estilo mais ousado.",
  "O que você faria se estivesse sozinho(a) com {jogadores} em um lugar reservado?",
  "Se {jogadores} pedisse para te dar um beijo, como você reagiria?",
  "Qual seria o primeiro passo para conquistar {jogadores} em um jogo de sedução?",
  "Se você tivesse que dar um conselho sexy para {jogadores}, qual seria?",
  "Se você fosse fazer um gesto atrevido para {jogadores}, qual seria?",
  "O que você acha que {jogadores} faria se você começasse a fazer uma provocação leve?",
  "Se você estivesse em um lugar privado com {jogadores}, o que faria para aumentar a tensão entre vocês?",
  "Descreva um momento de flerte com {jogadores} em que ambos estivessem se divertindo juntos.",
  "O que você faria se {jogadores} te pedisse para dançar uma música lenta e romântica?",
  "Qual seria a sua reação se {jogadores} se aproximasse de você de forma mais íntima?",
  "Se você estivesse se sentindo atraído(a) por {jogadores}, como demonstraria isso sem palavras?",
  "Descreva como seria um momento divertido, mas picante, com {jogadores}.",
  "Se {jogadores} lhe enviasse uma mensagem misteriosa, o que acha que ele(a) estaria sugerindo?",
  "O que você faria se estivesse em um ambiente relaxado com {jogadores} e sentisse uma conexão mais intensa?",
  "Qual seria a sua primeira reação se {jogadores} te olhasse de forma mais intensa e convidativa?",
  "O que você faria se {jogadores} sugerisse um jogo de perguntas e respostas com um toque mais atrevido?",
  "Se você estivesse sozinho(a) com {jogadores}, qual seria o primeiro passo para um flerte mais ousado?",

  "Você acha que {jogadores} e {jogadores1} seriam um bom par romântico? Por quê?",
  "Se {jogadores} e {jogadores1} estivessem em um encontro, quem você acha que pagaria a conta?",
  "Quem de {jogadores} e {jogadores1} você acha que tem mais chance de se apaixonar no próximo mês?",
  "Se {jogadores} e {jogadores1} formassem um casal, quem seria o mais romântico?",
  "Você acha que {jogadores} e {jogadores1} já deram algum sinal de que gostam um do outro? O que?",
  "Se você fosse juntar {jogadores} e {jogadores1} em um encontro, qual seria o destino perfeito para eles?",
  "Quem de {jogadores} e {jogadores1} você acha que poderia escrever um livro sobre o amor mais emocionante?",
  "Você acredita que {jogadores} e {jogadores1} poderiam viver um romance épico, tipo filme de Hollywood?",
  "Se {jogadores} e {jogadores1} estivessem em uma competição de dança, quem você acha que ganharia?",
  "Qual casal mais improvável do grupo seria o mais engraçado: {jogadores1} e {jogadores2} ou {jogadores3} e {jogadores}?",
  "Se {jogadores} e {jogadores1} fossem viajar juntos, quem seria o mais organizado e quem o mais bagunçado?",
  "Você acha que {jogadores} e {jogadores1} se daria bem em uma situação romântica improvisada? Como seria?",
  "Quem de {jogadores} e {jogadores1} você acha que seria o mais romântico e quem seria mais prático no relacionamento?",
  "Se {jogadores} e {jogadores1} se apaixonassem de repente, qual seria a primeira coisa que você acha que eles fariam?",
  "Você acha que {jogadores} e {jogadores1} seriam mais românticos no início de um namoro ou após anos juntos?",
  "Se {jogadores} e {jogadores1} estivessem em uma comédia romântica, qual seria o título do filme?",
  "Se {jogadores} e {jogadores1} tivessem que organizar uma festa surpresa, quem faria a parte mais criativa e quem cuidaria dos detalhes?",
  "Quem de {jogadores} e {jogadores1} você acha que faria o melhor jantar romântico em casa?",
  "Se {jogadores} e {jogadores1} se encontrassem em um reality show sobre casais, quem você acha que ganharia o prêmio?",
  "Qual dos dois, {jogadores} ou {jogadores1}, você acha que daria o melhor conselho sobre amor e relacionamento?",

  "Se você tivesse que escolher entre beijar alguém da sua amizade ou nunca mais beijar ninguém, o que faria?",
  "Qual é o seu maior desejo secreto que você nunca contou para ninguém?",
  "Você toparia passar um fim de semana em um lugar isolado com alguém do grupo? Por quê?",
  "Se tivesse que escolher entre fazer algo arriscado e ousado ou ficar em uma zona de conforto, qual escolheria?",
  "Qual seria o seu plano perfeito para um encontro romântico, mas fora do comum?",
  "Conte o que você faria se encontrasse um amor de verão incrível e misterioso, mas soubesse que teria que se despedir em breve.",
  "Qual a sua ideia de um date inesquecível?",
  "Qual a atitude mais ousada que você já teve com alguém que gostava?",
  "Se você tivesse que se envolver com alguém em segredo, quem do grupo você escolheria?",
  "Você acha que a paixão pode nascer de uma amizade? Por quê?",
  "O que você acha de um relacionamento casual? Já teve ou teria um?",
  "Se você tivesse que dar um conselho romântico para alguém, qual seria?",
  "Qual é o lugar mais inusitado onde você já se sentiu atraído por alguém?",
  "Você acredita que o amor pode ser mais intenso do que a amizade? Justifique sua resposta.",
  "O que você faria se soubesse que é a última vez que verá alguém que você gosta?",
  "Se você tivesse que escolher entre uma noite inesquecível de diversão ou um relacionamento sério, o que escolheria?",
  "Você aceitaria fazer algo inusitado e ousado para salvar um relacionamento?",
  "Qual foi o momento mais sexy que você já presenciou ou participou?",
  "Qual seria a sua reação se alguém lhe desse um elogio muito pessoal e ousado?",
  "Se você tivesse que escolher entre ser sempre romântico ou sempre sexy, qual escolheria?"

];
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
while (numeros.length < 500) {
  const numero = Math.floor(Math.random() * 999) + 1;
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


  localStorage.setItem('Classif', JSON.stringify(Classif));
  localStorage.setItem('PontosAnterior', JSON.stringify(PontosAnterior));
  localStorage.setItem('PerguntasAdultas', JSON.stringify(PerguntasAdultas));
  localStorage.setItem('Maisde3DesafioObrigatorio', JSON.stringify(Maisde3DesafioObrigatorio));
  localStorage.setItem('PorcentagemVariavel', JSON.stringify(PorcentagemVariavel));
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

  Classif = JSON.parse(localStorage.getItem('Classif')) || false;
  PontosAnterior = JSON.parse(localStorage.getItem('PontosAnterior')) || false;
  PerguntasAdultas = JSON.parse(localStorage.getItem('PerguntasAdultas')) || false;
  Maisde3DesafioObrigatorio = JSON.parse(localStorage.getItem('Maisde3DesafioObrigatorio')) || false;
  PorcentagemVariavel = JSON.parse(localStorage.getItem('PorcentagemVariavel')) || false;

  document.getElementById("cla").checked = Classif;
  document.getElementById("adult-questions").checked = PerguntasAdultas;
  document.getElementById("mandatory-challenges").checked = Maisde3DesafioObrigatorio;
  document.getElementById("variable-percentage").checked = PorcentagemVariavel;
  document.getElementById("pnt").checked = PontosAnterior;
}
