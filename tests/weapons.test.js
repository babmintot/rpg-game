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
  test('constructor sets properties', () => {
    const w = new Weapon('test', 20, 100, 2);
    expect(w.name).toBe('test');
    expect(w.attack).toBe(20);
    expect(w.durability).toBe(100);
    expect(w.initDurability).toBe(100);
    expect(w.range).toBe(2);
  });

  test('takeDamage reduces durability', () => {
    const w = new Weapon('test', 20, 100, 2);
    w.takeDamage(30);
    expect(w.durability).toBe(70);
  });

  test('takeDamage not below 0', () => {
    const w = new Weapon('test', 20, 100, 2);
    w.takeDamage(150);
    expect(w.durability).toBe(0);
  });

  test('getDamage full when dura >= 30%', () => {
    const w = new Weapon('test', 20, 100, 2);
    w.takeDamage(70);
    expect(w.getDamage()).toBe(20);
  });

  test('getDamage half when dura < 30%', () => {
    const w = new Weapon('test', 20, 100, 2);
    w.takeDamage(71);
    expect(w.getDamage()).toBe(10);
  });

  test('getDamage 0 when dura 0', () => {
    const w = new Weapon('test', 20, 100, 2);
    w.takeDamage(100);
    expect(w.getDamage()).toBe(0);
  });

  test('isBroken works', () => {
    const w = new Weapon('test', 20, 100, 2);
    expect(w.isBroken()).toBe(false);
    w.takeDamage(100);
    expect(w.isBroken()).toBe(true);
  });
});

describe('Arm', () => {
  test('correct properties', () => {
    const arm = new Arm();
    expect(arm.name).toBe('Рука');
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });

  test('takeDamage does nothing', () => {
    const arm = new Arm();
    arm.takeDamage(999);
    expect(arm.durability).toBe(Infinity);
  });
});

describe('Bow', () => {
  test('correct properties', () => {
    const bow = new Bow();
    expect(bow.name).toBe('Лук');
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.range).toBe(3);
  });
});

describe('Sword', () => {
  test('correct properties', () => {
    const sword = new Sword();
    expect(sword.name).toBe('Меч');
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.range).toBe(1);
  });
});

describe('Knife', () => {
  test('correct properties', () => {
    const knife = new Knife();
    expect(knife.name).toBe('Нож');
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.range).toBe(1);
  });
});

describe('Staff', () => {
  test('correct properties', () => {
    const staff = new Staff();
    expect(staff.name).toBe('Посох');
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.range).toBe(2);
  });
});

describe('LongBow', () => {
  test('correct properties', () => {
    const lb = new LongBow();
    expect(lb.name).toBe('Длинный лук');
    expect(lb.attack).toBe(15);
    expect(lb.range).toBe(4);
    expect(lb.durability).toBe(200);
  });
});

describe('Axe', () => {
  test('correct properties', () => {
    const axe = new Axe();
    expect(axe.name).toBe('Секира');
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.range).toBe(1);
  });
});

describe('StormStaff', () => {
  test('correct properties', () => {
    const ss = new StormStaff();
    expect(ss.name).toBe('Посох Бури');
    expect(ss.attack).toBe(10);
    expect(ss.range).toBe(3);
    expect(ss.durability).toBe(300);
  });
});