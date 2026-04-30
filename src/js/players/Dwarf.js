'use strict';

import Warrior from './Warrior.js';
import Axe from '../weapons/Axe.js';

export default class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = '����';
    this.weapon = new Axe();
  }

  checkWeapon() { }
}