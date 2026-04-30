'use strict';

import Weapon from './Weapon.js';

export default class Knife extends Weapon {
  constructor() {
    super('���', 5, 300, 1);
  }
}