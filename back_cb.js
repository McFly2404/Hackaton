

const API_URL   = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
const API_TOKEN = 'API_TOKEN';  // Pega tu token aquí

const chatbox = document.getElementById('chatbox');
const form    = document.getElementById('form-chat');
const input   = document.getElementById('input-msg');

function append(msg, cls){
  const d = document.createElement('div');
  d.className = 'msg ' + cls;
  d.textContent = msg;
  chatbox.appendChild(d);
  chatbox.scrollTop = chatbox.scrollHeight;
}

async function queryHF(message){
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + API_TOKEN
    },
    body: JSON.stringify({ inputs: message })
  });
  const json = await res.json();
  // El endpoint devuelve un array u objeto, según modelo:
  // facebook/blenderbot devuelve [{ generated_text: "..." }]
  if (Array.isArray(json) && json[0]?.generated_text) {
    return json[0].generated_text;
  }
  return json.generated_text || JSON.stringify(json);
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const userMsg = input.value.trim();
  if (!userMsg) return;
  append(userMsg, 'user');
  input.value = '';
  append('...', 'bot'); // indicador de “escribiendo”
  // elimina el “…” antes de mostrar la respuesta real:
  setTimeout(() => chatbox.lastChild.remove(), 10);

  try {
    const botReply = await queryHF(userMsg);
    append(botReply, 'bot');
  } catch (err) {
    console.error(err);
    append('Error al contactar IA.', 'bot');
  }
});
