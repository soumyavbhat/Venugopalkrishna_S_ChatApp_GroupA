(() => {
  const socket = io();


  let messageList = document.querySelector('ul'),
  chatForm = document.querySelector('form'),
  chatMessage = chatForm.querySelector('.message'),
  nameInput = document.querySelector('.nickname'),
  nickName = null;


  function setNickname()
  {
    nickName = this.value;
  }

  function handleSendMessage(e)
  {
  e.preventDefault();
  nickName = (nickName && nickName.length > 0) ? nickName : 'user';
  msg = `${nickName} says ${chatMessage.value}`;

  socket.emit('chat message', msg);
  chatMessage.value = "";
  return false;
  // debugger;
  }


function appendMessage(msg)
{
  // debugger;
  let d = new Date();
  let time =  d.getHours() + ":" + d.getMinutes() ;
  let newMsg = `<li>${msg.message}<br><br>Sent at: ${time}</li>`;//getting the message froms erver

  messageList.innerHTML += newMsg;
}

function appendDiscMessage(msg)
{
  let newMsg = `<li>${msg}</li>`; //getting the message froms erver
  messageList.innerHTML += newMsg;
}


nameInput.addEventListener('change', setNickname, false);
  chatForm.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);
})();
