'use strict';

import Bow from './Bow.js';

export default class LongBow extends Bow {
  constructor() {
    super();
    this.name = '������� ���';
    this.attack = 15;
    this.range = 4;
  }
}