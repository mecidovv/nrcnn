import { CONFIG } from "./config.js";

export function createUI() {
  const typingMessage = document.querySelector("#typing-message");
  const finalMessage = document.querySelector("#final-message");
  const finalSubmessage = document.querySelector("#final-submessage");
  const dragHint = document.querySelector("#drag-hint");

  function showHint() {
    dragHint.classList.add("visible");
  }

  function hideHint() {
    dragHint.classList.remove("visible");
  }

  function typeMessage(message) {
    const characters = Array.from(message);
    typingMessage.textContent = "";
    return new Promise((resolve) => {
      let index = 0;
      const interval = window.setInterval(() => {
        index += 1;
        typingMessage.textContent = characters.slice(0, index).join("");
        if (index >= characters.length) {
          window.clearInterval(interval);
          window.setTimeout(resolve, CONFIG.messagePauseMs);
        }
      }, CONFIG.typingIntervalMs);
    });
  }

  async function startMessages() {
    for (const message of CONFIG.messages) await typeMessage(message);
    typingMessage.textContent = "";
    finalMessage.classList.add("visible");
    finalSubmessage.classList.add("visible");
  }

  function showError() {
    typingMessage.textContent = "Animasiya yüklənə bilmədi.";
  }

  return { showHint, hideHint, startMessages, showError };
}
