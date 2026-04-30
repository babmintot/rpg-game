'use strict';

import Arm from '../weapons/Arm.js';
// eslint-disable-next-line no-unused-vars
import Knife from '../weapons/Knife.js';

export default class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = '�����';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
  }

  checkWeapon() { }
}