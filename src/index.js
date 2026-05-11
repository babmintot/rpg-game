'use strict';

import { play } from './js/game.js';
import Warrior from './js/players/Warrior.js';
import Archer from './js/players/Archer.js';
import Mage from './js/players/Mage.js';
import Dwarf from './js/players/Dwarf.js';
import Crossbowman from './js/players/Crossbowman.js';
import Demiurge from './js/players/Demiurge.js';
import './css/style.css';

const players = [
  new Warrior(0, 'Алёша Попович'),
  new Archer(5, 'Леголас'),
  new Mage(10, 'Гендальф'),
  new Dwarf(3, 'Гимли'),
  new Crossbowman(7, 'Охотник'),
  new Demiurge(12, 'Зевс'),
];

play(players);