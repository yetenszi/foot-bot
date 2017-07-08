const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.username}!');
});

client.on('message', function(message) {
if (message.channel.isPrivate) {
  console.log(`(DM) \n ${message.author.username} | ${message.author.id}: ${message.content} \n ------------`);
}
});

const prefix = "t."
const version = '1.1';

client.on('message', msg => {

  if (msg.content === prefix + 'testpm') {
  msg.author.sendMessage("Hello, World! and " + msg.author);
  }

  if (msg.content === prefix + 'ping') {
    msg.reply('pong');
    msg.react('🏓');
  }

  if (msg.content === prefix + 'commands') {
    msg.author.sendMessage('', {embed: {
    color: 3447003,
    author: {
      name: "**BOT COMMANDS**"
    },
    description: 't.ping: \n Pong. \n t.queue <youtube-link>: \n Plays music in voice channel. \n new commands being added.'
    }});
  }

  if (msg.content === prefix + 'testembed') {
    msg.channel.send('', {embed: {
      color: 3447003,
      description: 'A very simple Embed!',
      image: {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
      }
    }});
  }

  if (msg.content.startsWith(prefix + 'warn')) {
    if(msg.author.bot) return;
    var user = msg.mentions.users.first();
    var member = msg.guild.member(user);
    var reason = msg.content.split(' ').slice(2).join(' ');
      let role = msg.member.guild.permissions === ('KICK_MEMBERS');
        if (!msg.member.permissions.includes === 'KICK_MEMBERS')
          return msg.channel.sendMessage(":no_entry: You no **moderator or admin.** Go away. :no_entry:");
        if (!user)
          return msg.channel.sendMessage('Who is the person you gonna warn hey?');
        if (!reason)
          return msg.channel.sendMessage(`Why are you gonna warn ${user.username}`);
        user.sendMessage(`You got warned by **<@${msg.author.id}>** for **${reason}**. Sorry.`);
        msg.channel.sendMessage(`**${user.username}** got warned by **${msg.author.username}** for **${reason}**.`)
}

});

client.on('ready', () => {
  client.user.setGame('t.commands | Verison: v' + version)
  console.log('Ready!');
});

client.login('token');
