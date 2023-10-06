const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });

//button.addEventListener("click", () => {})
wsServer.on("connection", () => {
  console.log("New connection to WS server");
});
