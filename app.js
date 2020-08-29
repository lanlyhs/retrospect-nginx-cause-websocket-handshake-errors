const http = require("http");
const path = require("path");
const WebSocket = require("ws");
const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + `/index.html`));
});

app.ws("/chat", function (ws, req) {
    ws.send("Hello, World!");

    ws.on("close", function () {
        console.log("close");
        triggerSetInterval.closeInterval();
    });
});

const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}...`);
});
