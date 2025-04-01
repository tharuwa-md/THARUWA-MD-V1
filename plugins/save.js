



const { cmd, commands } = require("../command");
const path = require("path");

cmd({
  pattern: "save",
  react: "📁",
  alias: ["store"],
  desc: "Save and send back a media file (image, video, or audio).",
  category: "media",
  use: ".save <caption>",
  filename: __filename,
}, async (bot, message, chat, { quoted, q, reply }) => {
  try {
    // Vérifier si un message multimédia est cité
    if (!quoted) {
      return reply("❌ Reply to a media message (video, image, or audio) with the `.save` command.");
    }

    const mimeType = quoted.mtype || quoted.mediaType; // Mieux gérer les types MIME
    let mediaType;

    // Identifier le type de fichier multimédia
    if (mimeType.includes("video")) {
      mediaType = "video";
    } else if (mimeType.includes("image")) {
      mediaType = "image";
    } else if (mimeType.includes("audio")) {
      mediaType = "audio";
    } else {
      return reply("❌ Only video, image, or audio messages are supported.");
    }

    // Télécharger et sauvegarder le fichier multimédia
    const savedFilePath = await bot.downloadAndSaveMediaMessage(quoted);
    const resolvedFilePath = path.resolve(savedFilePath);

    // Préparer l'objet de réponse
    const mediaMessage = {
      caption: q || "",
    };
    mediaMessage[mediaType] = { url: "file://" + resolvedFilePath };

    // Envoyer le fichier au contact
    await bot.sendMessage(chat.sender, mediaMessage, { quoted: message });
    await reply("✅ Successfully saved and sent the media file.");
  } catch (error) {
    console.error(error);
    reply("❌ Failed to save and send the media. Please try again.");
  }
});
