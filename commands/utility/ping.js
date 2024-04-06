const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
		.addStringOption(option =>
			option
				.setName('input')
				.setDescription('The input to echo back')
				.setRequired(true)),

	async execute(interaction) {
		const reason = interaction.options.getString('input');		
		await interaction.reply('Pong!'+reason);


		//await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
		//await interaction.deleteReply();

	},
};