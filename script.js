/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
  "ไม่รักเค้าอ่อ😾",
  "ไม่จริงๆอะ",
  "😾",
  "เบบี้รักเค้าม้าย...",
  "ไม่ให้กดหรอกแบร่",
];

let messageIndex = 0;
let foo = 0;
function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  if (foo === 5) {
    // hide the last button
    noButton.style.display = "none";
  }
  messageIndex = (messageIndex + 1) % messages.length;
  foo += 1;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 2}px`;
}

function handleYesClick() {
  document.body.innerHTML = `
    <div class="container">
      <h1 class="header_text">เค้าก็รักเธอเหมือนกัน🫶🏼🫶🏼<br>รู้อยู่แล้วว่าต้องกด yes 😘</h1>
      <div class="gif_container">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif"
        />
      </div>
    </div>
  `;

  // Inject CSS styles directly into the page
  const style = document.createElement("style");
  style.textContent = `
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f9e3e3;
      font-family: 'Arial', sans-serif;
      overflow: hidden;
    }

    .container {
      text-align: center;
    }

    // .header_text {
    //   font-size: 3em;
    //   color: #d32f2f;
    // }

    // .gif_container img {
    //   width: 100%;
    //   max-width: 500px;
    //   height: auto;
    // }

    .heart {
      position: fixed;
      bottom: -50px;
      font-size: 2rem;
      animation: floatUp linear forwards;
    }

    @keyframes floatUp {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-110vh) scale(1.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Start popping hearts
  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  // Random position
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3–5 seconds

  document.body.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
