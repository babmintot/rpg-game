'use strict';

export default class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initDurability = durability;
    this.range = range;

  }
  // eslint-disable-next-line no-unused-vars
  takeDamage(_damage) { }
  getDamage() { }
  isBroken() { }
}