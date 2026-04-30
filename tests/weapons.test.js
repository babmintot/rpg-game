'use strict';

import Weapon from '../src/js/weapons/Weapon.js';
import Arm from '../src/js/weapons/Arm.js';
import Bow from '../src/js/weapons/Bow.js';
import Sword from '../src/js/weapons/Sword.js';
import Knife from '../src/js/weapons/Knife.js';
import Staff from '../src/js/weapons/Staff.js';
import LongBow from '../src/js/weapons/LongBow.js';
import Axe from '../src/js/weapons/Axe.js';
import StormStaff from '../src/js/weapons/StormStaff.js';

describe('Weapon', () => {
  test('constructor creates weapon with correct properties', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    expect(weapon.name).toBe('Test');
    expect(weapon.attack).toBe(20);
    expect(weapon.durability).toBe(100);
    expect(weapon.initDurability).toBe(100);
    expect(weapon.range).toBe(2);
  });

  test('takeDamage reduces durability', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    weapon.takeDamage(30);
    expect(weapon.durability).toBe(70);
  });

  test('takeDamage does not reduce durability below 0', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    weapon.takeDamage(150);
    expect(weapon.durability).toBe(0);
  });

  test('takeDamage does not affect Infinity', () => {
    const arm = new Arm();
    arm.takeDamage(1000);
    expect(arm.durability).toBe(Infinity);
  });

  test('getDamage returns full damage when durability >= 30%', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    expect(weapon.getDamage()).toBe(20);
    weapon.takeDamage(50);
    expect(weapon.getDamage()).toBe(20);
  });

  test('getDamage returns half damage when durability < 30%', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    weapon.takeDamage(75);
    expect(weapon.getDamage()).toBe(10);
  });

  test('getDamage returns 0 when durability = 0', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    weapon.takeDamage(100);
    expect(weapon.getDamage()).toBe(0);
  });

  test('isBroken returns true when durability = 0', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    weapon.takeDamage(100);
    expect(weapon.isBroken()).toBe(true);
  });

  test('isBroken returns false when durability > 0', () => {
    const weapon = new Weapon('Test', 20, 100, 2);
    expect(weapon.isBroken()).toBe(false);
  });
});

describe('Arm', () => {
  test('creates with correct characteristics', () => {
    const arm = new Arm();
    expect(arm.name).toBe('Hand');
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });
});

describe('Bow', () => {
  test('creates with correct characteristics', () => {
    const bow = new Bow();
    expect(bow.name).toBe('Bow');
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.range).toBe(3);
  });
});

describe('Sword', () => {
  test('creates with correct characteristics', () => {
    const sword = new Sword();
    expect(sword.name).toBe('Sword');
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.range).toBe(1);
  });
});

describe('Knife', () => {
  test('creates with correct characteristics', () => {
    const knife = new Knife();
    expect(knife.name).toBe('Knife');
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.range).toBe(1);
  });
});

describe('Staff', () => {
  test('creates with correct characteristics', () => {
    const staff = new Staff();
    expect(staff.name).toBe('Staff');
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.range).toBe(2);
  });
});

describe('LongBow', () => {
  test('creates with correct characteristics', () => {
    const longBow = new LongBow();
    expect(longBow.name).toBe('Long Bow');
    expect(longBow.attack).toBe(15);
    expect(longBow.range).toBe(4);
    expect(longBow.durability).toBe(200);
  });
});

describe('Axe', () => {
  test('creates with correct characteristics', () => {
    const axe = new Axe();
    expect(axe.name).toBe('Axe');
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.range).toBe(1);
  });
});

describe('StormStaff', () => {
  test('creates with correct characteristics', () => {
    const stormStaff = new StormStaff();
    expect(stormStaff.name).toBe('Storm Staff');
    expect(stormStaff.attack).toBe(10);
    expect(stormStaff.range).toBe(3);
    expect(stormStaff.durability).toBe(300);
  });
});