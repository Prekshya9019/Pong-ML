"use strict";

let socket;
let startPredicting = false;
let times = 0;
let y = 0;
let imageTrained = document.getElementById('imgTrained');
let emojis =["🙂", "😎", "😛", "✌", "✋", "☝", "🤘", "🖕", "👉", "👌", "👍", "👋", "🖖"]


// socket = io.connect("https://am7673.itp.io/"); // Listen for sockets
socket = io.connect(); // Listen for sockets

for (var i = 0; i < 50; i++){
  let emj = document.createElement('p');
  emj.setAttribute("id","emj")
  document.body.appendChild(emj);
}

document.addEventListener('DOMContentLoaded', function() {

  // socket.on('clients_from_server', clientsConnected);
  // socket.on('clients_from_server_disconnected', clientsDisconnected);
  socket.on('position_from_server', positionServer);


  function positionServer(data) {

    if (data == "🙂") {
      // imageTrained.src = "./images/peace.jpg"
    } else if ( data == "😎" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "😛" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "✌" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "✋" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "☝" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "🤘" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "🖕" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "👌" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "👍" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "👋" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else if ( data == "🖖" ){
      console.log("Position from Server:" + " " + data);
      emj.innerHTML = data;
    } else {
      emj.innerHTML = "";
    }

  }


});
