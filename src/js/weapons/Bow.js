'use strict';

import Weapon from './Weapon.js';

export default class Bow extends Weapon {
    constructor() {
        super('Bow', 10, 200, 3);
    }
}