(() => {
  const socket = io();


  let messageList = document.querySelector('ul'),
  chatForm = document.querySelector('form'),
  chatMessage = chatForm.querySelector('.message');

function appendMessage(msg)
{
  // debugger;
  let newMsg = `<li>${msg.message}</li>`;//getting the message froms erver
  messageList.innerHTML += newMsg;
}

function appendDiscMessage(msg)
{
  let newMsg = `<li>${msg}</li>`; //getting the message froms erver
  messageList.innerHTML += newMsg;
}

function handleSendMessage(e)
{
e.preventDefault();
debugger;
}

  chatMessage.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);
})();
