const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: function (enemy) {
        enemy.health -= 10;
        return enemy;
    }
};
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: function (hero) {
        hero.health -= 10;
        return hero;
    }
};

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (heroPlayer, enemyPlayer) => {
    

    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        const number = getRandomNumberInRange(0, 1);

        if (number === 0) {
            heroPlayer.heatEnemy(enemyPlayer);
        } else {
            enemyPlayer.heatHero(heroPlayer);
        }
    };

    let winner;
    let health;

    if (heroPlayer.health <= 0) {
        winner = enemyPlayer.name;
        health = enemyPlayer.health;
    } else {
        winner = heroPlayer.name;
        health = heroPlayer.health
    }
    alert(`${winner} победил! У него осталось ${health} здоровья`);

};

startGame(hero, enemy);
