/**
 *  VoHelpYo - Miscellaneous Discord Bot
 */

// Import the discord.js module.
const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const SECRETS = require('./secrets.js');
const TOKEN = SECRETS.vohelpyo_token;
const WEBHOOK = new DISCORD.WebhookClient(SECRETS.vohelpyo_webhook_id, SECRETS.vohelpyo_webhook_token);

function replyInvalid(message) {
	message.reply('Invalid argument');
}

// Check the ready event: It means that your BOT will start reacting to information from Discord.
BOT.on('ready', () => {
	console.log('READY');
});

// Create an event listener for messages.
BOT.on('message', message => {
	// if the message starts with '!'...
	if(message.content.startsWith('!')) {
		const args = message.content.split(' ');
		
		// switch on the first word of the message...
		switch(args[0]) {
			case('!avatar'): {
				//const timestamp = new Date().getTime() / 1000;
				const avatarURL = message.author.avatarURL;
				//const avatarID = message.author.avatar;
				
				message.channel.sendFile(avatarURL.toString(), '', message.author.toString()).catch(console.error);
				break;
			}
			case('!debug'): {
				var target = message.author;
				if(args.length > 1) {
					target = /*args[1]*/ message.mentions.users.first();
					
					if(target == undefined) {
						replyInvalid(message);
						break;
					}
				}
				
				message.reply(
				'\nbot: ' + target.bot +
				'\nclient: {' +
				((target.client == null) ? '}' :
				//'\n  channels: ' + target.client.channels +
				//'\n  email: ' + target.client.email +
				//'\n  emojis : ' + target.client.emojis +
				//'\n  guilds: ' + target.client.guilds +
				//'\n  options: ' + target.client.options +
				//'\n  password: ' + target.client.password +
				//'\n  presences: ' + target.client.presences +
				//'\n  readyAt: ' + target.client.readyAt +
				//'\n  readyTimestamp: ' + target.client.readyTimestamp +
				//'\n  shard: ' + target.client.shard +
				'\n  status: ' + target.client.status +
				//'\n  token: ' + target.client.token +
				//'\n  uptime: ' + target.client.uptime +
				//'\n  user: ' + target.client.users +
				//'\n  users: ' + target.client.channels +
				//'\n  voiceConnections : ' + target.client.voiceConnections +
				'\n}'
				) +
				'\ndiscriminator: ' + target.discriminator +
				'\nid: ' + target.id +
				'\npresence: {' +
				((target.presence == null) ? '}' :
				'\n  game: {' +
				((target.presence.game == null) ? '}' :
				'\n    name: ' + target.presence.game.name +
				'\n    streaming: ' + target.presence.game.streaming +
				'\n    type: ' + target.presence.game.type +
				'\n    url: ' + target.presence.game.url +
				'\n  }'
				) +
				'\n  status: ' + target.presence.status +
				'\n}'
				) +
				'\nusername: ' + target.username
				);
				break;
			}
		}
	} else // if the message contains the BOT's mention...
	if(message.content.includes(BOT.user.toString())) {
		// .reply adds the user's mention to the begining of the message.
		message.reply("Hello!");
	}

	//message.channel.sendFile(avatarURL.toString()).catch(console.error);

	/*
	message.reply(message.author.avatarURL);
	console.log('SENT AVATAR URL');
	WEBHOOK.sendMessage('hello!')
	.catch(console.error);
	*/

	/*
	WEBHOOK.sendSlackMessage({
		'username': 'Wumpus',
		'attachments': [{
			'pretext': 'this looks pretty cool',
			'color': '#F0F',
			'footer_icon': 'http://snek.s3.amazonaws.com/topSnek.png',
			'footer': 'Powered by sneks',
			'ts': timestamp
		}]
	}).catch(console.error);*/

	/*
	WEBHOOK.sendSlackMessage({
		//'username': 'Wumpus',
		'text': avatarURL,
		'attachments': [{
			//'pretext': '',
			'color': '#FF8800',
			//'footer_icon': '',
			//'footer': '',
			'ts': timestamp
		}]
	}).catch(console.error);*/
});

// Log In.
console.log('LOGGING IN');
BOT.login(TOKEN);
console.log('LOGGED IN');
