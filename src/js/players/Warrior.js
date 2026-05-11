'use strict';

import Player from './Player.js';
import Sword from '../weapons/Sword.js';
import Knife from '../weapons/Knife.js';
import Arm from '../weapons/Arm.js';

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = 'Воин';
    this.weapon = new Sword();
  }

  takeDamage(damage) {
    if (this.life < 60 && this.getLuck() > 0.8 && this.magic > 0) {
      const magicDamage = Math.min(damage, this.magic);
      this.magic -= magicDamage;
      const remainingDamage = damage - magicDamage;
      if (remainingDamage > 0) {
        super.takeDamage(remainingDamage);
      }
    } else {
      super.takeDamage(damage);
    }
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      if (this.weapon instanceof Sword) {
        this.weapon = new Knife();
      } else if (this.weapon instanceof Knife) {
        this.weapon = new Arm();
      }
    }
  }
}