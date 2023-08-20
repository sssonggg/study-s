// 랜덤 배경화면
const backgrounds = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.jpg"];
let currentBackgroundIndex = 0;

function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url('./image/${backgrounds[currentBackgroundIndex]}')`;
}

changeBackground();

const backgroundInterval = setInterval(changeBackground, 10000); 

window.addEventListener("load", () => {
  changeBackground();
  backgroundInterval;
});


// 실시간 시계
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    
    const options = { hour: 'numeric', minute: 'numeric' };
    const formattedTime = now.toLocaleTimeString('en-US', options);

    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);
