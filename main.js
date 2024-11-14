const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

mimicServerCallback(server, "ping", "ping server);", "ping server");
mimicServerCallback(server, "pong", "pong server);", "pong server");
mimicServerCallback(server, "error", "error server);", "error server");

function mimicServerCallback(server, method, response, request) {
  server.on(method, function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(response);
    res.end();
  });
}

//= Lines 1-2: Defining text characters for the empty and full hearts for you to use later.

//= Lines 4-5: This function simulates a server call, returning a promise that will either resolve or reject.
//= Line 6: The function uses a setTimeout to mimic network delay, waiting 300 milliseconds before resolving or rejecting.
//= Lines 7-9: isRandomFailure introduces a 20% chance of failure, making the server call randomly reject with an error message.
//= Lines 10-11: If the call succeeds (80% chance), it resolves with the message "Pretend remote server notified of action!".

//= Lines 17-19: Here, mimicServerCallback is invoked multiple times with different parameters (ping, pong, error).
//= Each call defines a specific response to a particular event. 
//= This could represent different actions or statuses (like ping and pong), 
//= simulating how a server might handle various routes or event types.

//= Line 21: mimicServerCallback seems intended to simulate responses to different server events (ping, pong, error) by 
//= listening to various methods on an input server. 
//= Line 22: It uses a callback to respond with response text for the specified method.
//= Lines 23-25: It sets a Content-Type header to "text/plain" and sends the response message to the client, ending the response.

//= mimicServerCall simulates a server request with a chance of success or failure, using a promise to handle asynchronous responses.
//= mimicServerCallback simulates how a server would respond to specific events (ping, pong, error) by setting up handlers with pre-defined 
//= responses for different methods on an input server object.