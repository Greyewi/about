import Enemies from "./enemy";
const {Telegraf} = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_GAME_TOKEN)
const data = new Map()

const myEnemies = new Enemies()
myEnemies.setEnemy("goblin", 3, 0)
myEnemies.setEnemy("orc", 5, 3)
myEnemies.setEnemy("skeleton", 7, 5)
myEnemies.setEnemy("zombie", 8, 6)
myEnemies.setEnemy("dragon", 20, 20)


const start = (from: any, ctx: any) => {
    const name = from.first_name || from.username
    const initialState = {
        potions: 3,
        hp: 100,
        level: 1,
        atk: 10,
        def: 3,
        gold: 100,
        battle: null
    }
    data.set(name, initialState)
    ctx.reply(
        name + `, you are brave gladiator. You should defeat all enemies.
     /info - status, 
     /fight - start the next fight,
     /buy - spend 100 gold to buy potion,
     /heal - use potion
     `
    )
}

bot.start((ctx: any) => {
    const from = ctx.update.message.from
    start(from, ctx)
})


bot.on('text', (ctx: any) => {
    const from = ctx.update.message.from
    const name = from.first_name || from.username
    const user = data.get(name)
    const enemyList = myEnemies.getEnemyList()

    if(ctx?.update?.message?.text === '/info') {
        let status = ''

        for(const key in user) {
            status = status + "  " + key + "=" + user[key]
        }
        ctx.reply(status)
    } else if(ctx?.update?.message?.text === '/fight'){
        const myEnemy = enemyList[Math.round(Math.random() * (enemyList.length - 1))]
        user.battle = myEnemies.getEnemy(myEnemy)
        ctx.reply(
            ` your enemy is ${myEnemy}
                /attack - attack enemy with your atk, 
                /heal - use potion (50% to chance),
                /info - your status
                /escape - try to run off enemy`
        )
    } else if(ctx?.update?.message?.text === '/buy'){
        if(user.gold >= 100){
            user.potions++
            user.gold = user.gold - 100
            ctx.reply("You have bought one potion")
        } else {
            ctx.reply("Not enough gold")
        }
    } else if(ctx?.update?.message?.text === '/heal'){
        if(user.potions > 1){
            user.potions--
            user.hp = user.hp + 50
            ctx.reply("You have recovered 50 hp")
        } else {
            ctx.reply("You have no potions")
        }
    } else if(ctx?.update?.message?.text === '/menu') {
        if(user.battle) {
            ctx.reply(
                `
                /attack - attack enemy with your atk, 
                /heal - use potion (50% to chance),
                /escape - try to run off enemy`
            )
        } else {
            ctx.reply("Take it easy)")
        }
    } else if(ctx?.update?.message?.text === '/attack') {
        if(user.battle) {
            const hit = (user.atk - user.battle.def)
            user.battle.hp = user.battle.hp - hit
            ctx.reply(`You are slash enemy on ${hit} hit points, his hp = ${user.battle.hp}`)
            if(user.battle.hp > 0) {
                const enemyHit = (user.battle.atk - user.def)
                user.hp = user.hp - enemyHit
                ctx.reply(`Enemy slash on you by ${hit} hit points, your hp = ${user.hp}`)
                if(user.hp <= 0) {
                    user.battle = null
                    ctx.reply(`Game over, new game started after 5 seconds`)
                    setTimeout(() => start(from, ctx), 5000)
                }
            }  else {
                user.battle = null
                ctx.reply(`You have won the battle!
                 /info - status, 
                 /fight - start the next fight,
                 /buy - spend 100 gold to buy potion,
                 /heal - use potion`
                )
            }
        } else {
            ctx.reply("Take it easy)")
        }
    }
})


bot.launch().then(() => {
    console.log("bot has been launch")
})

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))