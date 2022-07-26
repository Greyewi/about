type EnStats = {
    level: number,
    hp: number,
    atk: number,
    def: number,
    gold: number,
}

type EnStatsList = {
    list: {
        [name: string] : EnStats
    },
    getEnemy: (name: string) => EnStats,
    setEnemy: (name: string, level: number, minLv: number) => void,
    getEnemyList: () => string[]
}

declare class Enemies {
    constructor();
    list: EnStatsList;
    getEnemy(name: string): EnStats;
    setEnemy(name: string, level: number, minLv: number): void;
    getEnemyList(): string[];
}

function Enemies(this: EnStatsList){
    this.list = {}

    this.setEnemy = (name: string, level: number, minLv: number) => {
        const lvMod = Math.round(Math.random() * level + minLv)
        this.list[name] = {
            level: lvMod,
            hp: lvMod * 10,
            atk: lvMod * 3,
            def: lvMod * 1.5,
            gold: lvMod * 15,
        }
    }

    this.getEnemy = (name) => this.list[name]
    this.getEnemyList = () => Object.keys(this.list)
}

export default Enemies