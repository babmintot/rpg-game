'use strict';

import Warrior from './players/Warrior.js';
import Archer from './players/Archer.js';
import Mage from './players/Mage.js';
import Dwarf from './players/Dwarf.js';
import Crossbowman from './players/Crossbowman.js';
import Demiurge from './players/Demiurge.js';

export function play() {
  const players = [
    new Warrior(0, '���� �������'),
    new Archer(5, '�������'),
    new Mage(10, '��������'),
    new Dwarf(3, '�����'),
    new Crossbowman(7, '�������'),
    new Demiurge(12, '����')
  ];

  console.log('���� ��������!');
  console.log(players);
}