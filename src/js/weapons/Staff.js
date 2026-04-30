'use strict';

import Weapon from './Weapon.js';

export default class Staff extends Weapon {
  constructor() {
  super('Staff', 8, 300, 2);
}
}