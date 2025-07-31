
// Timer de contagem regressiva
let time = 600; // 10 minutos em segundos
const countdownElement = document.getElementById("countdown");
const interval = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  countdownElement.textContent = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
  time--;
  if (time < 0) clearInterval(interval);
}, 1000);

// Mensagens falsas de entrada no grupo
const messages = [
  "• Paula entrou no grupo agora mesmo",
  "• João aproveitou a oferta de hoje",
  "• Bruna usou o cupom escondido",
  "• Lucas acabou de entrar",
  "• Ana ativou o alerta de achadinhos"
];
const notificationElement = document.getElementById("notifications");

setInterval(() => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  notificationElement.textContent = msg;
}, 5000);

// Mostrar botão de entrada após clique
document.getElementById("show-button").addEventListener("click", () => {
  document.getElementById("join-button").style.display = "inline-block";
});
