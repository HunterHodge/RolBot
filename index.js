const Discord = require("discord.js");

const Dice = require("./dice.js");
const Explore = require("./explore.js");
const Fish = require("./fish.js");

const client = new Discord.Client();

const token = "[Censored password]";

const PREFIX = "~";
client.on("ready", () => {
  console.log("Bot is online");
});

client.on("message", msg => {
  if (msg.content.charAt(0) === PREFIX) {
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args[0]);

    switch (args[0].toLowerCase()) {
      case "roll":
        msg.reply(Dice.dice(args));
        break;
      case "explore":
        msg.reply(Explore.explore(args));
        break;
      case "fish":
        msg.reply(Fish.fish(args));
        break;
      default:
        msg.reply(`Error: ${args[1]} is not a command`);
        break;
    }
  }
});
client.login(token);
