let TelegramBot = require("node-telegram-bot-api");
// import TelegramBot from 'node-telegram-bot-api';
let config = require("config");
// import config from 'config';
let Koa = require("koa");
let Router = require("koa-router");
let bodyParser = require("koa-bodyparser");

const TOKEN = config.get("token");
const bot = new TelegramBot(TOKEN);
bot.setWebHook(`${config.get("url")}/bot`);

const app = new Koa();

const router = Router();
router.post("/bot", ctx => {
  const { body } = ctx.request;
  bot.processUpdate(body);
  ctx.status = 200;
});

app.use(bodyParser);
app.use(router.routes());

const port = config.get("port");
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

bot.on('message', msg => {
  const {
    chat: { id }
  } = msg;
  bot.sendMessage(id, 'pong');
});

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
  const {
    chat: { id }
  } = msg;
  bot.sendMessage(id, match);
});
