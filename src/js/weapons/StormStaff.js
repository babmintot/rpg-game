'use strict';

import Staff from './Staff.js';

export default class StormStaff extends Staff {
  constructor() {
    super();
    this.name = '����� ����';
    this.attack = 10;
    this.range = 3;
  }
}