const {Telegraf} = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

type Types = {
    [string: string]: string | (() => string)
}

const reducer = (action: string, payload?: any) => {
    const types: Types = {
        "/start" : "Please type language, enter /ru to choose russian or /en to choose english",
        "/ru": "Колосальный Привет! Добро пожаловать к автоматическому помощнику того самого индивидуума, надеюсь, тут получится разобраться, можно ввести /help_ru и появится справка с командами.",
        "/en": "Majestic greeting! Welcome to the automatic helper that man. I hope it will be easy. However, could you enter /help_en to evoke information?",
        "/help_en": "I can do /n this one /n another one",
        "/help_ru": "В разработке",
        "/check_time": () => {
            return "Text"
        },
        "/about": ""
    }

    return types[action]
}

bot.command('quit', (ctx: any) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)

    // Using context shortcut
    ctx.leaveChat()
})

bot.on('text', (ctx: any) => {
    // Explicit usage

    ctx.telegram.sendMessage(ctx.message.chat.id, reducer(ctx.update.message.text))

    // Using context shortcut
    //ctx.reply(`Hello ${ctx.state.role}`)
})


bot.launch().then((r: any) => {
    console.log("bot has been launch", r)
})

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))