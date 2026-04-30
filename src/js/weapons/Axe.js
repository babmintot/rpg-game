'use strict';

import Sword from './Sword.js';

export default class Axe extends Sword {
  constructor() {
    super();
    this.name = '������';
    this.attack = 27;
    this.durability = 800;
    this.initDurability = 800;
  }
}