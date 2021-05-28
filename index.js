const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

const config = require('./config.json')

rpc.on("ready", () =>{
    rpc.setActivity({
        details: config.Details,
        state: config.State,
        largeImageKey: config.LargeImageKey,
        largeImageText: config.LargeImageText,
        smallImageKey: config.SmallImageKey,
        smallImageText: config.SmallImageText,

        buttons: [{label: config.Button1Name, url: config.Button1URL}, {label: config.Button2Name, url: config.Button2URL}]

    })
    console.log("Working")
})

rpc.login({
    clientId: config.clientID
})
