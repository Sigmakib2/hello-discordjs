const { Events, userMention, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity('with low quality code');

        client.on('messageCreate', (message) => {

            const currentchannel = client.channels.cache.get(message.channelId);
            console.log('Message: ', message.content + ' Channel ID: ' ,message.channelId);
            
            //currentchannel.send("Hi There!" + userMention(message.author.id));
            //The above action can create a loop type feedback in the channel
        })
    },

};