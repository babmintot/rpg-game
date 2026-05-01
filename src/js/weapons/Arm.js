'use strict';

import Weapon from './Weapon.js';

export default class Arm extends Weapon {
  constructor() {
    super('Hand', 1, Infinity, 1);
  }
}