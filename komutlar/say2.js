  const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    let tag = "⾚"; // tagınız
    let sunucu = "767667251864141854"; //sunucu ID
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "EMOJİ İSMİ");           ///örnek const emoji = client.emojis.find(emoji => emoji.name === "mavitik"); 
  const arvelosembed = new Discord.RichEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/769170771485655053/783241902144618506/suenosgiff.gif")
  .setDescription(" **Sunucu İstatistikleri** ")
  .addField("<a:suenos_yldz:782233797810585660>  **Sunucuda Bulunan Üye Sayısı** ",message.guild.memberCount)
    .addField("<a:suenos_yldz:782233797810585660>  **Sunucudaki Aktif Üye Sayısı** ",message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
    .addField("<a:suenos_yldz:782233797810585660>  **Ses Kanallarında Bulunan Üye Sayısı** ", `${count}`)
    .addField("<a:suenos_yldz:782233797810585660>  **Taglı Üye Sayısı** ",
      message.guild.members.filter(m => m.user.username.includes("⾚")).size
    ) 
    .setFooter(client.user.username, message.guild.iconURL);
  message.channel.sendEmbed(arvelosembed)
    message.react(emoji)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//say
exports.help = {
  name: 'say',
  description: 'sunucuyu sayar.',
  usage: 'say'
//say
};