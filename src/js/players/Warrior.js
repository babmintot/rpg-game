'use strict';

import Player from './Player.js';
import Sword from '../weapons/Sword.js';

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = '����';
    this.weapon = new Sword();
  }

  checkWeapon() { }
}