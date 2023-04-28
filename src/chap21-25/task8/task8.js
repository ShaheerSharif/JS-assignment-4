const message = 'Ali and Sami are best friends. They play cricket and football together.';
// 'g' flag stands for global
// It will replace all instances of 'and' with '&' in the string
const newMessage = message.replace(/and/g, '&');

alert(`Previous message \n ${message}`)
alert(`New message \n ${newMessage}`)
