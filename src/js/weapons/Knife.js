'use strict';

import Weapon from './Weapon.js';

export default class Knife extends Weapon {
    constructor() {
    super('Knife', 5, 300, 1);
  }
}