const messageList = document.getElementById('message-list');

const messages = [
  "You're the best football analyst ever! ⚽🔥",
  "What did you think of last night's match?",
  "Can't wait for the next game day!",
  "Who is your GOAT? Messi or Ronaldo?"
];

function displayMessages() {
  messageList.innerHTML = '';
  messages.forEach((msg, index) => {
    const li = document.createElement('li');
    li.className = 'message';
    li.textContent = msg;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteMessage(index);

    li.appendChild(delBtn);
    messageList.appendChild(li);
  });
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const newMessage = input.value.trim();
  if (newMessage) {
    messages.push(newMessage);
    displayMessages();
    input.value = '';
  } else {
    alert('Please enter a message!');
  }
}

function deleteMessage(index) {
  messages.splice(index, 1);
  displayMessages();
}

window.onload = displayMessages;