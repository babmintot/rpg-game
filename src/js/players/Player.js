'use strict';

import Arm from '../weapons/Arm.js';
import Knife from '../weapons/Knife.js';

export default class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
  }

  getLuck() {
    const randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life -= damage;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    const moveDistance = Math.min(Math.abs(distance), this.speed);
    this.position -= moveDistance;
  }

  moveRight(distance) {
    const moveDistance = Math.min(Math.abs(distance), this.speed);
    this.position += moveDistance;
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(Math.abs(distance));
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    }
    if (this.dodged()) {
      return;
    }
    this.takeDamage(damage);
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      if (this.weapon instanceof Knife) {
        this.weapon = new Arm();
      } else {
        this.weapon = new Knife();
      }
    }
  }

  tryAttack(enemy) {
    const distance = Math.abs(this.position - enemy.position);

    if (distance > this.weapon.range) {
      return false;
    }

    this.weapon.takeDamage(10 * this.getLuck());
    const damage = this.getDamage(distance);

    if (this.position === enemy.position) {
      enemy.position += 1;
      enemy.takeAttack(damage * 2);
    } else {
      enemy.takeAttack(damage);
    }

    this.checkWeapon();
    return true;
  }

  chooseEnemy(players) {
    const aliveEnemies = players.filter((p) => p !== this && !p.isDead());
    if (aliveEnemies.length === 0) {
      return null;
    }
    return aliveEnemies.reduce((min, p) => (p.life < min.life ? p : min));
  }

  moveToEnemy(enemy) {
    const direction = enemy.position - this.position;
    this.move(direction);
  }

  turn(players) {
    const enemy = this.chooseEnemy(players);
    if (!enemy) {
      return;
    }
    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }
}