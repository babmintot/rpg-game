'use strict';

import Player from './Player.js';
import Staff from '../weapons/Staff.js';

export default class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = '���';
    this.weapon = new Staff();
  }

  checkWeapon() { }
}