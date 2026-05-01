'use strict';

import Weapon from './Weapon.js';

export default class Sword extends Weapon {
  constructor() {
    super('Sword', 25, 500, 1);
  }
}