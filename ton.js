const axios = require('axios')
const dayjs = require('dayjs')

const data = [
  { date: "2023-08-12", ton_amount: 80.7 },
  { date: "2024-02-29", ton_amount: 42.2 },
  { date: "2024-03-12", ton_amount: 18.8 },
  { date: "2024-03-13", ton_amount: 42.2 },
  { date: "2024-04-08", ton_amount: 9.0 },
  { date: "2024-04-10", ton_amount: 36.8 },
  { date: "2024-04-10", ton_amount: 9.74 },
  { date: "2024-04-13", ton_amount: 15.6 },
  { date: "2024-04-18", ton_amount: 16.0 },
  { date: "2024-04-20", ton_amount: 16.3 },
  { date: "2024-05-20", ton_amount: 30.0 },
  { date: "2024-05-20", ton_amount: 8.5 },
  { date: "2024-06-18", ton_amount: 5.3 },
  { date: "2024-06-20", ton_amount: 4.7 },
  { date: "2024-06-29", ton_amount: 3.6 },
  { date: "2024-07-05", ton_amount: 3.8 },
  { date: "2024-07-25", ton_amount: 60.1 },
  { date: "2024-08-03", ton_amount: 50.2 },
  { date: "2024-08-05", ton_amount: 22.2 },
  { date: "2024-08-14", ton_amount: 30.0 },
  { date: "2024-09-06", ton_amount: 79.2 },
  { date: "2024-09-24", ton_amount: 43.5 },
  { date: "2024-09-24", ton_amount: 6.3 },
  { date: "2024-09-26", ton_amount: 50.0 },
  { date: "2024-10-02", ton_amount: 49.0 },
  { date: "2024-10-14", ton_amount: 25.0 },
  { date: "2024-10-14", ton_amount: 25.0 },
  { date: "2024-10-17", ton_amount: 20.0 },
  { date: "2024-11-30", ton_amount: 43.0 },
  { date: "2024-12-21", ton_amount: 93.0 },
  { date: "2024-12-30", ton_amount: 88.0 },
  { date: "2025-01-14", ton_amount: 84.7 },
  { date: "2025-01-20", ton_amount: 46.2 },
  { date: "2025-01-20", ton_amount: 49.3 },
  { date: "2025-01-27", ton_amount: 10.0 },
  { date: "2025-02-02", ton_amount: 40.3 },
  { date: "2025-02-03", ton_amount: 89.3 },
  { date: "2025-02-19", ton_amount: 136.7 },
  { date: "2025-02-28", ton_amount: 125.1 },
  { date: "2025-03-04", ton_amount: 197.0 },
  { date: "2025-03-13", ton_amount: 109.3 },
  { date: "2025-03-16", ton_amount: 58.7 },
  { date: "2025-03-20", ton_amount: 4.0 },
  { date: "2025-04-01", ton_amount: 120.5 },
  { date: "2025-04-22", ton_amount: 166.0 },
  { date: "2025-05-01", ton_amount: 156.8 },
  { date: "2025-05-05", ton_amount: 16.5 },
  { date: "2025-05-19", ton_amount: 134.6 },
  { date: "2025-05-27", ton_amount: 116.2 },
  { date: "2025-06-13", ton_amount: 167.3 },
  { date: "2025-06-30", ton_amount: 103.6 },
  { date: "2025-07-14", ton_amount: 49.0 },
  { date: "2025-07-16", ton_amount: 28.3 },

  // добавленные:
  { date: "2025-08-19", ton_amount: 61 },
  { date: "2025-09-05", ton_amount: 127 },
  { date: "2025-09-18", ton_amount: 50 },
  { date: "2025-10-12", ton_amount: 51 },
  { date: "2025-11-04", ton_amount: 250 },
  { date: "2025-11-18", ton_amount: 170 },
  { date: "2025-11-23", ton_amount: 250 },
  { date: "2025-11-27", ton_amount: 248 }
]

async function getTonUsdPrice(date) {
  const ts = dayjs(date).startOf('day').unix()
  const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=TON&tsyms=USD&ts=${ts}`

  try {
    const res = await axios.get(url)
    return res.data.TON?.USD || 0
  } catch (err) {
    console.warn(`❌ Ошибка запроса для ${date}: ${err.message}`)
    return 0
  }
}

async function main() {
  let totalTon = 0
  let totalUsd = 0

  for (const entry of data) {
    const price = await getTonUsdPrice(entry.date)
    const usd = entry.ton_amount * price

    console.log(`${entry.date} | ${entry.ton_amount.toFixed(2)} TON × $${price.toFixed(2)} = $${usd.toFixed(2)}`)

    totalTon += entry.ton_amount
    totalUsd += usd

    await new Promise(r => setTimeout(r, 1200)) // rate-limit
  }

  console.log(`\n💰 Суммарно TON: ${totalTon.toFixed(2)} TON`)
  console.log(`💵 Суммарно потрачено: $${totalUsd.toFixed(2)} USD`)
  console.log(`📊 Средняя цена: $${(totalUsd / totalTon).toFixed(4)} USD/TON`)
}

main()
