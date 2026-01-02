const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const ADMIN_ID = 7973039530; // your Telegram ID (number)

if (!token) {
  console.error("BOT_TOKEN is missing");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "✅ Bot is alive and working");
});

bot.onText(/\/addtask/, (msg) => {
  if (msg.from.id !== ADMIN_ID) {
    return bot.sendMessage(msg.chat.id, "❌ Admin only");
  }

  bot.sendMessage(
    msg.chat.id,
    "Send task like this:\nTitle | Link | Reward"
  );
});

console.log("Bot started successfully");