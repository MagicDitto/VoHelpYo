/**
 *  VoHelpYo - Miscellaneous Discord Bot
 */

// Import the discord.js module.
const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const SECRETS = require('./secrets.js');
const TOKEN = SECRETS.vohelpyo_token;
const WEBHOOK = new DISCORD.WebhookClient(SECRETS.vohelpyo_webhook_id, SECRETS.vohelpyo_webhook_token);

// Check the ready event: It means that your BOT will start reacting to information from Discord.
BOT.on('ready', () => {
	console.log('READY');
});

// Create an event listener for messages.
BOT.on('message', message => {
	// if the message starts with '!'...
	if(message.content.startsWith('!')) {
		const command = message.content.split(' ')[0];
		
		// switch on the first word of the message...
		switch(command) {
			'!avatar': {
				//const timestamp = new Date().getTime() / 1000;
				const avatarURL = message.author.avatarURL;
				//const avatarID = message.author.avatar;
				
				message.channel.sendFile(avatarURL.toString(), '', message.author.toString()).catch(console.error);
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
	
	// if the message contains the BOT's mention...
	if(message.content.includes(BOT.user.toString())) {
		// .reply adds the user's mention to the begining of the message.
		message.reply("Hello!");
	}
});

// Log In.
console.log('LOGGING IN');
BOT.login(TOKEN);
console.log('LOGGED IN');
