let pointerAngle = 0;

var quantJogadores = 0;
// Carregar a música
const audio = new Audio('Sons/rodar.mp3');
audio.loop = true; // A música vai tocar em loop

function jogar() {
  salvarVariaveis();
  document.getElementById("local").close();
  document.getElementById("can").innerHTML = `<canvas id="wheelCanvas" width="500px" height="500px"><br></canvas>`;

  can.style.position = 'fixed';        
  can.style.top = '70%';              
  can.style.left = '50%';              
  can.style.transform = 'translate(-50%, -30%)';
  can.style.height = '80%';     
  document.getElementById("local").innerHTML = "";
  const canvas = document.getElementById("wheelCanvas");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100;
  let isSpinning = false;
  quantJogadores = data.length;
  function drawWheel() {
    let currentAngle = 0;
    data.forEach((item) => {
      const sliceAngle = (item.percentage / 100) * 2 * Math.PI;
  
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
  
      const textAngle = currentAngle + sliceAngle / 2;
      const textX = centerX + (radius / 1.5) * Math.cos(textAngle);
      const textY = centerY + (radius / 1.5) * Math.sin(textAngle);
  
      ctx.shadowColor = "black";
      
      ctx.shadowBlur = 3; 
      ctx.shadowOffsetX = 0; 
      ctx.shadowOffsetY = 0; 
      ctx.fillStyle = "white";
      ctx.font = "20px Playfair Display";
    
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(item.name, textX, textY);
  
      currentAngle += sliceAngle;
    });
  }

  function drawPointer() {
    const pointerLength = radius + 20;
    const pointerWidth = 20;
    if (imageLoaded) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(pointerAngle);
      const bottleHeight = pointerLength * 1.25;
      const bottleWidth = 50;

      ctx.rotate(Math.PI / 2);

      ctx.drawImage(
        bottleImage,
        -bottleWidth / 2,
        -bottleHeight / 2,
        bottleWidth,
        bottleHeight
      );

      ctx.restore();
    }
  }

  function getSelectedName(angle) {
    let cumulativeAngle = 0;
    const normalizedAngle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    for (const item of data) {
      const sliceAngle = (item.percentage / 100) * 2 * Math.PI;
      cumulativeAngle += sliceAngle;

      if (normalizedAngle <= cumulativeAngle) {
        return item.name;
      }
    }
  }

  function spinPointer() {
    if (isSpinning) return;
    isSpinning = true;

    // Iniciar a música quando começar a girar
    audio.play();

    const randomIndex = Math.random() * 100;
    let targetAngle = 0;
    let cumulativePercentage = 0;

    for (const item of data) {
      cumulativePercentage += item.percentage;
      if (randomIndex <= cumulativePercentage) {
        const sliceAngle = (item.percentage / 100) * 2 * Math.PI;

        const randomOffset = Math.random() * sliceAngle - sliceAngle / 2;

        targetAngle = cumulativePercentage / 100 * 2 * Math.PI - sliceAngle / 2 + randomOffset;
        break;
      }
    }

    const spinDuration = 1000;
    const extraSpins = Math.PI * (Math.round(Math.random() * 7) + 1); 

    const finalAngle = pointerAngle + targetAngle + extraSpins;
    const startTime = performance.now();

    function animateSpin(currentTime) {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / spinDuration, 1);

      pointerAngle = (pointerAngle + (finalAngle - pointerAngle) * easeOutCubic(t)) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWheel();
      drawPointer();

      if (t < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        isSpinning = false;
        const selectedName = getSelectedName(pointerAngle);

        const selectedIndex = data.findIndex(player => player.name === selectedName);
        if (selectedIndex !== -1) {
          if (PorcentagemVariavel == true) {
            PontosRetirados = Math.round((Math.random() * 2) + 1);
            data[selectedIndex].percentage -= PontosRetirados;
            let remainingPlayers = data.length - 1;

            data.forEach((player, index) => {
              if (index !== selectedIndex) {
                player.percentage += PontosRetirados / remainingPlayers;
              }
            });
          }
        } audio.pause();
        audio.currentTime = 0;
        Pergunta(selectedName, selectedIndex);
        const playerList = document.getElementById("playerList");
      
       
        // Parar a música quando o giro terminar
       
      }
    }

    requestAnimationFrame(animateSpin);
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  canvas.addEventListener("click", spinPointer);

  drawWheel();
  drawPointer();
}
