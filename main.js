/**
 *  VoHelpYo - Miscellaneous Discord Bot
 */

// Import the discord.js module.
const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const TOKEN = process.env['vohiyo_token'];
const WEBHOOK = new DISCORD.WebhookClient(process.env['vohiyo_webhook_id'], process.env['vohiyo_webhook_token']);

// Check the ready event: It means that your BOT will start reacting to information from Discord.
BOT.on('ready', () => {
	console.log('READY');
});

// Create an event listener for messages.
BOT.on('message', message => {
	// if the message contains the BOT's mention...
	if (message.content.includes(BOT.user.toString())) {
		// .reply adds the user's mention to the begining of the message.
		message.reply("Hello!");
	} else {
		// if the message is 'what is my avatar'...
		//if (message.content === 'what is my avatar') {

		// if the message contains 'what is my avatar'...
		//if (message.content.includes('what is my avatar')) {

		// if the message starts with '!avatar'...
		if (message.content.startsWith('!avatar')) {
			var timestamp = new Date().getTime() / 1000;
			var avatarURL = message.author.avatarURL;
			var avatarID = message.author.avatar;
			//var filename = avatarID + '.jpg';
			//var filename = avatarURL.substring(avatarURL.lastIndexOf('/') + 1, avatarURL.length);

			//console.log(avatarURL);
			//console.log(avatarID);
			//console.log(filename);

			//console.log(message.author.toString());

			// Send the user's avatar (URL).

			//message.channel.sendFile(avatarURL.toString()).catch(console.error);

			message.channel.sendFile(avatarURL.toString(), '', message.author.toString()).catch(console.error);

			/*
			message.reply(message.author.avatarURL);
			console.log('SENT AVATAR URL');
			WEBHOOK.sendMessage('hello!')
			.catch(console.error);
			*/

			//WEBHOOK.sendFile(avatarURL.toString(), filename, message.author.username).catch(console.error);

			//WEBHOOK.sendFile(avatarURL.toString()).catch(console.error);

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
		}
	}
});

// Log In.
console.log('LOGGING IN');
BOT.login(TOKEN);
console.log('LOGGED IN');
