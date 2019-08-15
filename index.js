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
  let args = msg.content.substring(PREFIX.length).split(" ");

  console.log(args);

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
  }
});

client.login(token);

