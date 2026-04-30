'use strict';

import Mage from './Mage.js';
import StormStaff from '../weapons/StormStaff.js';

export default class Demiurge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = '�������';
    this.weapon = new StormStaff();
  }

  checkWeapon() { }
}