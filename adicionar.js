
let bottleImage = new Image();
bottleImage.src = 'IMG/garrafa.png';
let imageLoaded = false;
bottleImage.onload = function () {
    imageLoaded = true;
};
function escolherCorUnica() {
    let cor;
    do {
        const colorIndex = Math.floor(Math.random() * cores.length);
        cor = cores[colorIndex];
    } while (data.some(item => item.color === cor));
    return cor;
}

function add() {
    if (data.length < cores.length) {
        document.getElementById("ErroList").innerHTML = `<b class="erro"></b><br>`;
        const nameInput = document.getElementById("playerName");
        const playerList = document.getElementById("playerList");
        const name = nameInput.value.trim();

        if (!name) {
            erro("Por favor, insira um nome válido!");
            return;
        }

        if (data.some(player => player.name.toLowerCase() === name.toLowerCase())) {
            erro("Este nome já foi adicionado!");
            return;
        }

        const color = escolherCorUnica();

        data.push({ name, color, percentage: 0, VesesSeguidas: 0, Pontos: 0, AntPontos: 0 });

        salvarVariaveis();
        updatePlayerList();
        nameInput.value = "";
    }
    else {

        erro("Não é possível adicionar mais jogadores, vocês atigiram o limite maximo!");
    }
}
//configurando erro
var error = false;
var apagarErro = false;
function erro(c) {
    apagarErro = false;
    document.getElementById("ErroList").innerHTML = ` 
<b class="erro">${c}</b><br>
`;
    error = true;
}
setInterval(() => {
    if (error == true) {
        if (apagarErro == true) {
            document.getElementById("ErroList").innerHTML = `<b class="erro"></b><br>`;
            error = false;
        }
        else {
            apagarErro = true;
        }
    }

}, 2000);


function removePlayer(index) {
    data.splice(index, 1);
    salvarVariaveis();
    updatePlayerList();
}

function updatePlayerList() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = data
        .map((player, index) => {
            return `<div class="quadcolor" onclick="ColorF(${index})" style="background-color:${player.color};"></div>${player.name}  <br><button onclick="removePlayer(${index})" class="btn-dell">X</button>`;
        })
        .join("<br><br>");
}

var corSelecionada = "#ffffff";
var corIndex = -1;
function CorD() {
    data[corIndex].color = corSelecionada;
    document.getElementById("Cores").close();
    document.getElementById("local").showModal();
    updatePlayerList()
    salvarVariaveis();

}

function ColorF(i) {
    corSelecionada = data[i].color;
    data[i].color = "#ffffff";
    if (data.length < cores.length) {
        document.getElementById("N-escolha").innerHTML = `${data[i].name}, escolha sua cor: `;
        const container = document.getElementById('cores-container');
        container.innerHTML = "";

        cores.forEach(cor => {
            const corExistente = data.some(item => item.color === cor);
            corIndex = i;

            const corDiv = document.createElement('div');
            corDiv.style.position = 'relative';
            corDiv.style.backgroundColor = cor;
            corDiv.style.width = '50px';
            corDiv.style.height = '50px';
            corDiv.style.margin = '5px';
            corDiv.style.cursor = 'pointer';
            corDiv.style.borderRadius = '3px';

            if (cor === corSelecionada) {
                corDiv.style.borderRadius = '15px';
                corDiv.classList.add('selected');
            }

            if (corExistente) {
                const xDiv = document.createElement('div');
                xDiv.innerHTML = 'X';
                xDiv.style.position = 'absolute';
                xDiv.style.top = '50%';
                xDiv.style.left = '50%';
                xDiv.style.transform = 'translate(-50%, -50%)';
                xDiv.style.fontSize = '17px';
                xDiv.style.fontWeight = 'bold';
                xDiv.style.color = 'black';
                xDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                xDiv.style.borderRadius = '50%';
                xDiv.style.padding = '5px 10px 5px 10px';
                xDiv.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
                xDiv.style.zIndex = '1';
                corDiv.appendChild(xDiv);
            }

            corDiv.onclick = () => {
                if (!corExistente) {
                    corSelecionada = cor;

                    const selectedDiv = container.querySelector('.selected');
                    if (selectedDiv) {
                        selectedDiv.style.border = 'none';
                        selectedDiv.style.borderRadius = '3px';
                        selectedDiv.classList.remove('selected');
                    }
                    corDiv.style.borderRadius = '15px';
                    corDiv.classList.add('selected');
                }
            };

            container.appendChild(corDiv);
        });

        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'flex-start';
        container.style.maxWidth = 'calc(6 * 50px)';
        document.getElementById("local").close();
        document.getElementById("Cores").showModal();
    }
}




function play() {
    document.getElementById("ErroList").innerHTML = `<b class="erro"></b><br>`;
    if (data.length === 0) {
        erro("Adicione pelo menos 2 jogadores antes de jogar!");
        return;
    } else if (data.length === 1) {
        erro("Adicione mais um jogador antes de jogar!");
        return;
    }

    const totalPlayers = data.length;
    const basePercentage = Math.floor(100 / totalPlayers);
    let remainder = 100 % totalPlayers;

    data.forEach((player) => (player.percentage = basePercentage));
    while (remainder > 0) {
        const randomIndex = Math.floor(Math.random() * totalPlayers);
        data[randomIndex].percentage++;
        remainder--;
    }

    const playerList = document.getElementById("playerList");
    playerList.innerHTML = data
        .map(
            (player, index) =>
                `${index + 1}. ${player.name} - ${player.percentage}%`
        )
        .join("<br>");
    Jogando = true;
    salvarVariaveis();
    if (PontosAnterior == false) {
        data.forEach(item => {
            item.Pontos = 0;
            item.AntPontos = 0;
        });
    }
    if(Classif){
    document.getElementById("podio").classList.add("podio");
    document.getElementById("podio").innerHTML = `
    <h1>Classificação</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Pontuação</th>
        </tr>
      </thead>
      <tbody id="tabP">

      </tbody>
    </table>
    `;}
    jogar();
}
