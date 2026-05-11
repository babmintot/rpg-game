'use strict';

import Warrior from './players/Warrior.js';
import Archer from './players/Archer.js';
import Mage from './players/Mage.js';
import Dwarf from './players/Dwarf.js';
import Crossbowman from './players/Crossbowman.js';
import Demiurge from './players/Demiurge.js';

export function play(players) {
  console.log('=== ИГРА НАЧАЛАСЬ! ===');
  console.log(`Участников: ${players.length}`);

  let round = 1;

  while (true) {
    console.log(`\n--- РАУНД ${round} ---`);

    for (const player of players) {
      if (!player.isDead()) {
        console.log(`\nХод: ${player.name} (жизней: ${player.life})`);
        player.turn(players);
      }
    }

    const alivePlayers = players.filter((p) => !p.isDead());

    if (alivePlayers.length <= 1) {
      console.log('\n=== ИГРА ОКОНЧЕНА! ===');
      if (alivePlayers.length === 1) {
        console.log(` ПОБЕДИТЕЛЬ: ${alivePlayers[0].name}!`);
        return alivePlayers[0];
      } else {
        console.log(' НИЧЬЯ! Все погибли!');
        return null;
      }
    }

    round++;

    if (round > 100) {
      console.log('\n=== ЛИМИТ РАУНДОВ! ===');
      const winner = alivePlayers.reduce((max, p) =>
        p.life > max.life ? p : max
      );
      console.log(` ${winner.name} (${winner.life} жизней)`);
      return winner;
    }
  }
}

export {
  Warrior,
  Archer,
  Mage,
  Dwarf,
  Crossbowman,
  Demiurge,
};
